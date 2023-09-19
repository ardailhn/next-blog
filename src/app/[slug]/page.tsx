import React from 'react'
import styles from './singlePage.module.css'
import Menu from '../../components/menu/Menu'
import Image from 'next/image'
import Comments from '../../components/comments/Comments'

const getData = async ({ slug }) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Something went wrong')
    }

    return res.json();
}

const SinglePage = async ({ params }) => {
    const { slug } = params;
    const post = await getData({ slug });
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src={post.user.image} alt='' fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{post.user.name}</span>
                            <span className={styles.date}>{post.createdAt.substring(0, 10)}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={post.img} alt='' fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: post.desc }} />
                    <div className={styles.comment}>
                        <Comments postSlug={post.slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage