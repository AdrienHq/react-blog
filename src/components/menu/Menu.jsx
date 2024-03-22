import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "@/components/menuPosts/menuPosts";
// import MenuPosts from "../menuPosts/MenuPosts";
// import MenuCategories from "../menuCategories/MenuCategories";

const getData = async (page, cat, orderByViews) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
    const queryParams = `page=${page}&cat=${cat || ""}`;
    const url = `${baseURL}/api/posts?${queryParams}${orderByViews ? `&orderByViews=${orderByViews}` : ''}`;

    const res = await fetch(
        url,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
};

const Menu = async ({page, cat, orderByViews}) => {
    const {posts} = await getData(page, cat, orderByViews);
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            {posts?.map((item) => (
                <MenuPosts key={item._id} post={item} withImage={true}/>
            ))}
            {/*<MenuPosts withImage={false} />*/}
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            {/*<MenuCategories />*/}
            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            {/*<MenuPosts withImage={true} />*/}
        </div>
    );
};

export default Menu;