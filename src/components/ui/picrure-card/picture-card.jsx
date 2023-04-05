import React from "react";

import styles from "./picture-card.module.css";

export const PictureCard = ({description, image, alt}) => {
    return (
        <div className={styles.main}> 
            <p>{description}</p>
            <img
            className={styles.picture} 
            alt={alt}
            src={image}></img>
        </div>
    )
}