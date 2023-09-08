import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const CardList = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Recently Posts</h2>
            <div className={styles.posts}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    )
}

export default CardList