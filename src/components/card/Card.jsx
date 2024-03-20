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
            {item.img && (
                <div className={styles.imageContainer}>
                    <Image src={item.img} alt="" fill className={styles.image}/>
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{europeanDate} - </span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href="/">
                    <h1 className={styles.title}>{item.title}</h1>
                </Link>
                <p className={styles.desc}>
                    {item.desc.substring(0, 60)}
                </p>
                <Link href={`/posts/`} className={styles.linkUrl}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card