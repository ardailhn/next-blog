import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Arda ilhan here!</b> discover my latest posts
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="featured" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.postTitle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio, quis. Reprehenderit placeat necessitatibus voluptatem
                        beatae explicabo pariatur consectetur quia? Nemo itaque ut ullam
                        corrupti perferendis culpa, repellendus molestiae omnis modi.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured