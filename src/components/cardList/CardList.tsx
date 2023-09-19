import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const getData = async ({ page, size, categorySlug }) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&size=${size}${categorySlug && '&category=' + categorySlug}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Something went wrong')
    }

    return res.json();
}

const CardList = async ({ page, size, categorySlug }: { page: number, size: number, categorySlug?: string }) => {
    const { posts, pageOptions } = await getData({ page, size, categorySlug });

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Recently Posts</h2>
            <div className={styles.posts}>
                {posts.map((post: any) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
            <Pagination pageOptions={pageOptions} />
        </div>
    )
}

export default CardList