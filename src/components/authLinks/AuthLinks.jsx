import React from "react";
import styles from "./authLinks.module.css"
import Link from "next/link";

const AuthLinks = () => {

    const status = "notAuthenticated"
    return (
        <>
            {status === "notAuthenticated" ? (
                <Link href="/login" className={styles.link}>
                    Login
                </Link>
            ) : (
                <>
                    <Link href="/write" className={styles.link}>
                        Write
                    </Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
        </>
    )
}

export default AuthLinks