import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { getCategories } from '@/services/category.service'

const CategoryList = async () => {
    const categories = await getCategories();
    
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