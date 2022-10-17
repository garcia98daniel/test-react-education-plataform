import React from 'react';
import styles from './styles.module.css'
import Image from "next/image";

function index({event_hour, event_tittle, event_img}) {
    return (
        <div className={styles.event_container}>
            <div className={styles.image_container}>
                <Image src={`/images/${event_img}`} layout="fill" objectFit='cotain'/>
            </div>
            <small className={styles.event_hour}>{event_hour}</small>
            <p className={styles.event_tittle}>{event_tittle}</p>
        </div>
    );
}

export default index;