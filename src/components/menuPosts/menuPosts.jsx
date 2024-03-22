import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({post, withImage}) => {
    const date = new Date(post.createdAt);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const europeanDate = `${day}/${month}/${year}`;

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
    return (
        <div className={styles.items}>
            <Link href={`${baseURL}/posts/${post.slug}`} className={styles.item}>
                {withImage && post.img && (
                    <div className={styles.imageContainer}>
                        <Image src={post.img} alt="" fill className={styles.image}/>
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>{post.catSlug}</span>
                    <h3 className={styles.postTitle}>
                        {post.title}
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>{post.user.name}</span>
                        <span className={styles.date}> - {europeanDate}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MenuPosts;