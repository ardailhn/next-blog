"use client"
import React from 'react'
import styles from './pagination.module.css'
import { useRouter } from 'next/navigation';

const Pagination = ({ pageOptions }) => {
    const router = useRouter();

    const hasPrev = pageOptions.size * (pageOptions.page - 1) > 0;
    const hasNext = pageOptions.size * (pageOptions.page - 1) + pageOptions.size < pageOptions.total;

    const handlePrev = () => {
        router.push(`?page=${pageOptions.page - 1}&size=${pageOptions.size}`)
    }
    const handleNext = () => {
        router.push(`?page=${pageOptions.page + 1}&size=${pageOptions.size}`)
    }

    return (
        <div className={styles.container}>
            <button disabled={!hasPrev} onClick={handlePrev} className={styles.button}>Previous</button>
            <button disabled={!hasNext} onClick={handleNext} className={styles.button}>Next</button>
        </div>
    )
}

export default Pagination