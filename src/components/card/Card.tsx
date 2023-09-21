import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ post }) => {
    return (
        <div className={styles.container}>
            {post.img &&
                <div className={styles.imageContainer}>
                    <Image src={post.img} alt={post.title} fill className={styles.image} />
                </div>
            }
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{post.createdAt.substring(0, 10)} -{" "}</span>
                    <span className={styles.category}>{post.catSlug}</span>
                </div>
                <Link href={`/${post.slug}`}>
                    <h2>{post.title}</h2>
                </Link>
                <p className={styles.desc}>
                    Views : {post.views}
                </p>
                <Link href={`/${post.slug}`} className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card