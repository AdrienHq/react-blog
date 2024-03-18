import React from "react";
import styles from "./comments.module.css"
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="write a comment..."
                        className={styles.input}
                        // onChange={(e) => setDesc(e.target.value)}
                    />
                    <button className={styles.button}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                    <div className={styles.user}>
                        <span className={styles.username}>User Name</span>
                        <span className={styles.date}>12.12.12</span>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, placeat.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments