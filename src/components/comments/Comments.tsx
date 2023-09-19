"use client"
import React, { useState } from 'react'
import styles from './comments.module.css'
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

const fetcher = async (url: string) => {
    const res = await fetch(url, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Something went wrong');
    }

    return res.json();
};

const Comments = ({ postSlug }) => {
    const { status } = useSession()
    const { data: comments, isLoading, error, mutate } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);

    const [desc, setDesc] = useState('');

    const handleSubmit = async () => {
        await fetch('http://localhost:3000/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Comments</h2>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className={styles.textarea} placeholder="Write a comment..."></textarea>
                    <button onClick={handleSubmit} className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write comment</Link>
            )}
            <div className={styles.comments}>
                {isLoading ? "loading..." :
                    comments?.map((comment: any) => (
                        <div key={comment.id} className={styles.comment}>
                            <div className={styles.user}>
                                <Image src={comment.user.image} alt="user" width={50} height={50} className={styles.image} />
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{comment.user.name}</span>
                                    <span className={styles.date}>{comment.createdAt.substring(0, 10)}</span>
                                </div>
                            </div>
                            <p className={styles.desc}>{comment.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Comments