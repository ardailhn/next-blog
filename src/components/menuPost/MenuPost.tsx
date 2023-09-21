import React from 'react'
import styles from './menuPost.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPost = ({ withImage, post }: any) => {
    return (
        <Link href={`/${post.slug}`} className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
                <Image src={post.img} alt={post.title} fill className={styles.image} />
            </div>}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug}</span>
                <h3 className={styles.postTitle}>
                    {post.title}
                </h3>
                <div className={styles.detail}>
                    <div className={styles.username}>{post.user.name}</div>
                    <div className={styles.date}>{post.createdAt}</div>
                </div>
            </div>
        </Link>
    )
}

export default MenuPost