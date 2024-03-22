import React from "react";
import styles from "./singlePage.module.scss"
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
    //TODO POPULAR FILTER -> `${baseUrl}api/posts/${slug}?popular=true`
    const res = await fetch(`${baseURL}/api/posts/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
};
const SinglePage = async ({params}) => {

    const {slug} = params;

    const data = await getData(slug);

    const date = new Date(data.createdAt);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    const europeanDate = `${day}/${month}/${year}`;

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        {data?.title}
                    </h1>
                    <div className={styles.user}>
                        {data?.user?.image &&
                            <div className={styles.userImageContainer}>
                                <Image src={data.user.image} alt="" fill className={styles.avatar}/>
                            </div>
                        }
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user.name}</span>
                            <span className={styles.date}>{europeanDate}</span>
                        </div>
                    </div>
                </div>
                {data?.img &&
                    <div className={styles.imageContainer}>
                        <Image src={data.img} alt="" fill className={styles.image}/>
                    </div>
                }
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description} dangerouslySetInnerHTML={{__html: data?.desc}}/>
                    <div className={styles.comment}>
                        <Comments postSlug={slug}/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    )
}

export default SinglePage