import React from 'react'
import styles from './blogPage.module.css';
import CardList from '../../components/cardList/CardList';
import Menu from '../../components/menu/Menu';
import { getCategoryBySlug } from '@/services/category.service';

const BlogPage = async ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const size = parseInt(searchParams.size) || 2;
    const categorySlug = searchParams.category;

    const category = await getCategoryBySlug(categorySlug);

    return (
        <div className={styles.container}>
            <h1 className={styles.title} style={{ backgroundColor: category.color }}>{category.title} Blog</h1>
            <div className={styles.content}>
                <CardList page={page} size={size} categorySlug={categorySlug} />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage