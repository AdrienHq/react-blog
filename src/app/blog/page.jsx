import React from "react";
import styles from "./page.module.scss"
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const Page = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Title Blog</h1>
            <div className={styles.content}>
                <CardList/>
                <Menu/>
            </div>
        </div>
    )
}

export default Page