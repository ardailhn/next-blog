import React from 'react'
import styles from './menu.module.css'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'
import { getFeaturedPosts, getPopularPosts } from '@/services/post.service'
import { getCategories } from '@/services/category.service'

const Menu = async () => {
    const mostPopularPosts = await getPopularPosts();
    const editorPosts = await getFeaturedPosts();
    const categories = await getCategories();

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