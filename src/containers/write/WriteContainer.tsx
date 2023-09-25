"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './writePage.module.css';
import Image from 'next/image';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';

const WriteContainer = () => {
    const { status } = useSession();
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState(null);
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [catSlug, setCatSlug] = useState<string | null>(null);

    useEffect(() => {
        const storage = getStorage(app);
        const upload = () => {
            const name = new Date().getTime() + '-' + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                    });
                }
            );
        }
        file && upload();
    }, [file]);

    const slugify = (str: string) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');

    const handleSubmit = async () => {
        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || "style",
            })
        });
        if (res.status === 201) {
            const data = await res.json();
            router.push(`/${data.slug}`);
        }
    }

    useEffect(() => {
        if (status === 'unauthenticated') { router.push("/login") }
    }, [router, status]);

    if (status !== 'authenticated') { return (<div className={styles.loading}>Loading...</div>) }

    return (
        <div className={styles.container}>
            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' className={styles.input} />
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                <option value="style">style</option>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="culture">culture</option>
                <option value="travel">travel</option>
                <option value="coding">coding</option>
            </select>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(prev => !prev)}>
                    <Image src='/plus.png' alt='' width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <input ref={fileInputRef} type="file" name="" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: 'none' }} />
                        <button onClick={() => { fileInputRef?.current?.click(); }} className={styles.addButton}>
                            <Image src='/image.png' alt='' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src='/external.png' alt='' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src='/video.png' alt='' width={16} height={16} />
                        </button>
                    </div>
                )}
                <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' />
            </div>
            <button onClick={handleSubmit} className={styles.publish}>Publish</button>
        </div>
    )
}

export default WriteContainer