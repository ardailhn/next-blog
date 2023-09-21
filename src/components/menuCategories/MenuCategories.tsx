import React from 'react'
import styles from './menucategories.module.css'
import Link from 'next/link'
const MenuCategories = ({ categories }: any) => {
    return (
        <div className={styles.container}>
            {categories.map((category: any, index: number) => (
                <Link
                    key={index}
                    href={`/blog?category=${category.slug}`}
                    className={`${styles.categoryItem} ${styles[category.slug]}`}
                >
                    {category.title}
                </Link>
            ))}
        </div>
    )
}

export default MenuCategories