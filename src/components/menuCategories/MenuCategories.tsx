import React from 'react'
import styles from './menucategories.module.css'
import Link from 'next/link'
const MenuCategories = ({ categories }) => {
    return (
        <div className={styles.container}>
            {categories.map((category: string, index: number) => (
                <Link
                    key={index}
                    href={`/blog?cat=${category}`}
                    className={`${styles.categoryItem} ${styles[category]}`}
                >
                    {category}
                </Link>
            ))}
        </div>
    )
}

export default MenuCategories