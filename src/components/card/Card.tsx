import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="post" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>07.09.2023</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                </Link>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed, dolorum ut,
                    recusandae quo cumque blanditiis nostrum saepe quod quisquam officia dolor alias
                    qui in hic, velit consectetur mollitia excepturi.
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card