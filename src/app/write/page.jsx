"use client"

import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import styles from "./writePage.module.scss";
import "react-quill/dist/quill.bubble.css";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

const WritePage = () => {

    const {data,status} = useSession();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div className={styles.loading}>Loading ...</div>;
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title"/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16}/>
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/image.png" alt="" width={16} height={16}/>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16}/>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" width={16} height={16}/>
                        </button>
                    </div>
                )}
                <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Your text here"/>
            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    );
};

export default WritePage