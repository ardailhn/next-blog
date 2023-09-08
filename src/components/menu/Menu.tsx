import React from 'react'
import styles from './menu.module.css'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const posts = [
    {
        id: "1",
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        category: 'travel',
        date: '07.09.2023',
        user: {
            username: 'John Doe'
        },
        imageUrl: '/p1.jpeg'
    },
    {
        id: "2",
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        category: 'culture',
        date: '07.09.2023',
        user: {
            username: 'John Doe'
        },
        imageUrl: '/p1.jpeg'
    },
    {
        id: "3",
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        category: 'food',
        date: '07.09.2023',
        user: {
            username: 'John Doe'
        },
        imageUrl: '/p1.jpeg'
    },
    {
        id: "4",
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        category: 'fashion',
        date: '07.09.2023',
        user: {
            username: 'John Doe'
        },
        imageUrl: '/p1.jpeg'
    },
    {
        id: "5",
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        category: 'coding',
        date: '07.09.2023',
        user: {
            username: 'John Doe'
        },
        imageUrl: '/p1.jpeg'
    },
    {
        id: "6",
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        category: 'style',
        date: '07.09.2023',
        user: {
            username: 'John Doe'
        },
        imageUrl: '/p1.jpeg'
    },
]

const Menu = () => {
    const mostPopularPosts = posts;
    const editorPosts = posts;
    const categories = ['travel', 'culture', 'food', 'fashion', 'coding', 'style'];

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