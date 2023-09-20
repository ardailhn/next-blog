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

const storage = getStorage(app);

const WritePage = () => {
    const { status } = useSession();
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState(null);
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');

    const update = (file) => {
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

    useEffect(() => {

    }, [file]);

    useEffect(() => {
        if (status === 'unauthenticated') { router.push("/login") }
    }, [router, status]);

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
            body: JSON.stringify({ title, desc: value, img: media, slug: slugify(title) })
        });
    }

    let content = null;

    if (status === 'loading') { content = (<div className={styles.loading}>Loading...</div>) }

    content = (
        <div className={styles.container}>
            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' className={styles.input} />
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

    return content;
}

export default WritePage