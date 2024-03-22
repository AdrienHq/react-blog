import React from "react";
import styles from "./cardList.module.css"
import Pagination from "@/components/pagination/Pagination";
import Card from "@/components/card/Card";

const getData = async (page, cat) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
    const res = await fetch(
        `${baseURL}/api/posts?page=${page}&cat=${cat || ""}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
};

const CardList = async ({page, cat}) => {

    const {posts, count} = await getData(page, cat);

    const POST_PER_PAGE = 4;

    const hasPrevious = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {posts?.map((item) => (
                    <Card item={item} key={item._id}/>
                ))}
            </div>
            <Pagination page={page} hasPrevious={hasPrevious} hasNext={hasNext}/>
        </div>
    )
}

export default CardList