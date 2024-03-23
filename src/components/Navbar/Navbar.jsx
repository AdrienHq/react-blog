import React from "react"
import styles from "./navbar.module.css"
import Link from "next/link";
import AuthLinks from "@/components/authLinks/AuthLinks";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";

const getData = async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
    const res = await fetch(`${baseURL}/api/categories`, {
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
}
const Navbar = async () => {
    const data = await getData();
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">React Blog</Link>
            </div>
            <div className={styles.dropdown}>
                {data?.map((item) => (
                    <Link className={styles.dropdownItem} key={item._id} href="/">{item.title}</Link>
                ))}
            </div>
            <div className={styles.links}>
                <AuthLinks/>
                <ThemeToggle/>
            </div>

            {/*<div className={styles.social}>*/}
            {/*    <Image src="/facebook.png" alt="facebook" width={24} height={24}/>*/}
            {/*    <Image src="/instagram.png" alt="instagram" width={24} height={24}/>*/}
            {/*    <Image src="/tiktok.png" alt="tiktok" width={24} height={24}/>*/}
            {/*    <Image src="/youtube.png" alt="youtube" width={24} height={24}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default Navbar