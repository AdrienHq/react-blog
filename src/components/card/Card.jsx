import React from "react";
import styles from "./card.module.css"
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>21.10.92 - </span>
                    <span className={styles.category}>Food</span>
                </div>
                <Link href="/">
                    <h1 className={styles.title}>TitleCard</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci
                    consequatur libero, officia recusandae sit? Debitis ducimus eius enim ipsa natus neque officiis quod
                    Fugiat.
                </p>
                <Link href={`/posts/`} className={styles.linkUrl}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card