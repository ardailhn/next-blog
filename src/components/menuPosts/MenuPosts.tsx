import React from 'react'
import styles from './menuPosts.module.css'
import MenuPost from '../menuPost/MenuPost'

const MenuPosts = ({ withImage, posts }: any) => {
    return (
        <div className={styles.container}>
            {posts.map((post: any) => (
                <MenuPost key={post.id} post={post} withImage={withImage} />
            ))}
        </div>
    )
}

export default MenuPosts