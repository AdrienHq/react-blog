import React from "react";
import styles from "./singlePage.module.scss"
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>User Name</span>
                            <span className={styles.date}>12.23.34</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid ea eligendi
                            facilis hic impedit libero totam! Corporis, excepturi, suscipit?
                        </p>
                        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid ea eligendi
                            facilis hic impedit libero totam! Corporis, excepturi, suscipit?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid ea eligendi
                            facilis hic impedit libero totam! Corporis, excepturi, suscipit?
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    )
}

export default SinglePage