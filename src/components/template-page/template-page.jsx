import React from "react";

import styles from "./template-page.module.css";

export const TemplatePage = ({title, text, demo, git, children}) => {
    return (
        <div className={styles.main}>
            <h2 className={styles.hending} > {title}</h2>
            <div className={styles.text_box}>
            <p>{text}</p>
            <div className={styles.link_box}>
            <a className={styles.link} href={demo}>Demo</a>
            <a className={styles.link} href={git}>Git</a>
            </div>
            </div>
            <div className={styles.children_box}>
                {children}
            </div>
            
        </div>
    )


}