import React from "react";
import styles from "./cardList.module.css"
import Pagination from "@/components/pagination/Pagination";
import Card from "@/components/card/Card";

const getData = async (page) => {
    const res = await fetch(
        `http://localhost:3000/api/posts?page=${page}`,
        {
            cache: "no-store",
        }
    );

    console.log('hello'); // Log the response
    console.log(res); // Log the response

    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
}

const CardList = async ({page}) => {
    const data = await getData(page);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {data?.map((item) => (
                    <Card item={item} key={item._id} />
                ))}
            </div>
            <Pagination/>
        </div>
    )
}

export default CardList