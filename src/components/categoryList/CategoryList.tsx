import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/categories', {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Something went wrong')
    }

    return res.json();
}

const CategoryList = async () => {
    const categories = await getData();
    return (
        <div>
            <h2 className={styles.title}>Popular Categories</h2>
            <div className={styles.categories}>
                {categories.map((category: any) => (
                    <Link key={category.id} href={`/blog?category=${category.slug}`} className={`${styles.category}`} style={{ backgroundColor: category.color }}>
                        <Image src={category.img} alt={category.title} width={32} height={32} className={styles.image} />
                        {category.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryList