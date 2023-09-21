import React from 'react'
import styles from './menu.module.css'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const getPopularData = async () => {
    const res = await fetch(`http://localhost:3000/api/posts/popular`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Something went wrong')
    }

    return res.json();
}

const getFeaturedData = async () => {
    const res = await fetch(`http://localhost:3000/api/posts/featured`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Something went wrong')
    }

    return res.json();
}

const getCategoriesData = async () => {
    const res = await fetch(`http://localhost:3000/api/categories`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Something went wrong')
    }

    return res.json();
}

const Menu = async () => {
    const mostPopularPosts = await getPopularData();
    const editorPosts = await getFeaturedData();
    const categories = await getCategoriesData();

    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>What&apos;s hot</h2>
            <h2 className={styles.title}>Most Popular</h2>
            <MenuPosts withImage={false} posts={mostPopularPosts} />

            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h2 className={styles.title}>Categories</h2>
            <MenuCategories categories={categories} />

            <h2 className={styles.subtitle}>Choosen by the editor</h2>
            <h2 className={styles.title}>Editors Pick</h2>
            <MenuPosts withImage={true} posts={editorPosts} />
        </div>
    )
}

export default Menu