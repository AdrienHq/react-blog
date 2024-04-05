import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";
import Menu from "@/components/menu/Menu";

const Featured = ({searchParams}) => {
    const page = parseInt(searchParams.page) || 1;
    const {cat} = searchParams;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>
                    Hey !
                </b> Glad to see you here
            </h1>
            <div className={styles.post}>
                <div className={styles.featuredPostContainer}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpg" alt="" fill className={styles.image}/>
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.postTitle}>
                            {/*{item.desc.substring(0, 60)}*/}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at delectus ducimus ea earum eligendi eos est eum excepturi exercitationem magnam minus nam nemo nihil obcaecati omnis pariatur quaerat qui reiciendis rerum suscipit tempore vel vero vitae voluptatem. A eius inventore ipsa magni sapiente vero. Alias asperiores aspernatur beatae corporis cum deleniti dignissimos doloribus dolorum eius esse et excepturi expedita ipsa labore libero mollitia odio pariatur placeat quia quidem reiciendis similique sunt suscipit tempora, tempore tenetur, totam? Accusantium assumenda corporis culpa delectus deserunt dolores enim, ipsum maxime modi odio quaerat quasi quo reprehenderit saepe tenetur! Cum dignissimos error est modi.
                        </h1>
                        <p className={styles.postDesc}></p>
                        <button className={styles.button}>En lire plus ...</button>
                    </div>
                </div>
                <div className={styles.menuContainer}>
                    <Menu page={page} cat={cat} orderByViews={true}/>
                </div>
            </div>
        </div>
    )
}

export default Featured