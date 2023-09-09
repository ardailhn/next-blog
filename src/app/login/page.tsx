"use client";
import styles from './loginPage.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
    const { data, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') { router.push("/") }
    }, [router, status]);

    let content = null;

    if (status === 'loading') { content = (<div className={styles.loading}>Loading...</div>) }

    if (status === 'unauthenticated') {
        content = (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.socialButton} onClick={() => signIn('google')}>Sign in with Google</div>
                    <div className={styles.socialButton} onClick={() => signIn('github')}>Sign in with Github</div>
                    <div className={styles.socialButton} onClick={() => signIn('facebook')}>Sign in with Facebook</div>
                </div>
            </div>
        )
    }

    return content
}

export default LoginPage