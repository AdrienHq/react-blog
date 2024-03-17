import React from "react";
import styles from "./categoryList.module.css"
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image src="/style.png" alt="" width={32} height={32} className={styles.image}/>
                    Category 1
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`}>
                    <Image src="/style.png" alt="" width={32} height={32} className={styles.image}/>
                    Category 2
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`}>
                    <Image src="/style.png" alt="" width={32} height={32} className={styles.image}/>
                    Category 3
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
                    <Image src="/style.png" alt="" width={32} height={32} className={styles.image}/>
                    Category 4
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
                    <Image src="/style.png" alt="" width={32} height={32} className={styles.image}/>
                    Category 4
                </Link>
                <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
                    <Image src="/style.png" alt="" width={32} height={32} className={styles.image}/>
                    Category 4
                </Link>
            </div>
        </div>
    )
}

export default CategoryList