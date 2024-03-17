import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>
                    Hey !
                </b> Glad to see you here
            </h1>
            <div className={styles.post}>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur.</h1>
                    <p className={styles.postDesc}></p>
                    <button className={styles.button}>More...</button>
                </div>

            </div>
        </div>
    )
}

export default Featured