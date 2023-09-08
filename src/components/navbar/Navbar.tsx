import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
                <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
                <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
            </div>
            <div className={styles.logo}>
                <Link href="/">ARDAILHAN</Link>
            </div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link className={styles.link} href="/">Homepage</Link>
                <Link className={styles.link} href="/about">About</Link>
                <Link className={styles.link} href="/contact">Contact</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar