import React from 'react'
import styles from './menuPost.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPost = ({ withImage, post }: any) => {
    return (
        <Link href="/" className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
                <Image src={post.imageUrl} alt={post.title} fill className={styles.image} />
            </div>}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles[post.category]}`}>{post.category}</span>
                <h3 className={styles.postTitle}>
                    {post.title}
                </h3>
                <div className={styles.detail}>
                    <div className={styles.username}>{post.user.username}</div>
                    <div className={styles.date}>{post.date}</div>
                </div>
            </div>
        </Link>
    )
}

export default MenuPost