"use client";
import React, { useEffect, useState } from 'react';
import styles from './writePage.module.css';
import Image from 'next/image';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') { router.push("/") }
    }, [router, status]);

    let content = null;

    if (status === 'loading') { content = (<div className={styles.loading}>Loading...</div>) }

    content = (
        <div className={styles.container}>
            <input type="text" placeholder='Title' className={styles.input} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(prev => !prev)}>
                    <Image src='/plus.png' alt='' width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
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
            <button className={styles.publish}>Publish</button>
        </div>
    )

    return content;
}

export default WritePage