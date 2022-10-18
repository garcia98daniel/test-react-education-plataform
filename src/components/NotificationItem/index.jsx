import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

function NotificationItem({img, text, date}) {
    return (
        <div className={styles.notificationItem_container}>
            <i className={styles.notification_icon_container}>
                <Image alt="" src={`/images/${img}`} layout='fill' objectFit='contain'/>
            </i>
            <div className={styles.info}>
                <strong>{text}</strong>
                <small>{date}</small>
            </div>
        </div>
    );
}

export default NotificationItem;