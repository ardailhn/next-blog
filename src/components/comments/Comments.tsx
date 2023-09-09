import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link';
import Image from 'next/image';
const Comments = () => {

    const status = 'authenticated';
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Comments</h2>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea className={styles.textarea} placeholder="Write a comment..."></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="user" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>07.09.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum ex officiis ducimus
                        voluptatum, obcaecati delectus incidunt nulla, quibusdam quasi commodi modi ipsam iure
                        praesentium hic nam saepe voluptatibus cum?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments