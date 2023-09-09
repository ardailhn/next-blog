"use client";
import { SessionProvider } from "next-auth/react";

const AuthProvides = ({ children }: any) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AuthProvides