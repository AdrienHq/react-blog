import React from "react";
import styles from "./card.module.css"
import Image from "next/image";
import Link from "next/link";

const Card = ({key, item}) => {
    const date = new Date(item.createdAt);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    const europeanDate = `${day}/${month}/${year}`;

    return (
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{europeanDate} - </span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href="/">
                    <h1 className={styles.title}>{item.title}</h1>
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