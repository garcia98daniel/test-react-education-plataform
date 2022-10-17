import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import SearchInput from '../SearchInput/index';
import BurgerButtom from '../BurgerButtom/index';
function index(props) {
    return (
        <div className={styles.header}>
            <div className={styles.btn_container}>
                <BurgerButtom color={"gray"}/>
            </div>
            <i className={styles.brand_img_container}>
                <Image src={"/images/Group@1,5x.svg"}   layout='fill' objectFit='contain'/>
            </i>
            <div className={styles.desktop_items_container}>
                <div className={styles.search_container}>
                <SearchInput/>
                </div>
                <button className={styles.add_btn}>+ ADD</button>
                <i className={styles.icon_container}>
                    <Image src={"/images/notification.png"}  layout='fill' objectFit='contain'/>
                    <span className={styles.notification_light}></span>
                </i>
                <i className={styles.icon_container}>
                    <Image src={"/images/message.png"}  layout='fill' objectFit='contain'/>
                </i>
            </div>
            <div className={styles.profile_container}>
                    <p>Daniel Garcia</p>
                <i className={styles.profile_img_container}>
                    <Image src={"/images/Placeholders/Profile/userImg.svg"}   layout='fill' objectFit='contain'/>
                </i>
                <i className={styles.icon_profile}>
                    <Image src={"/images/row.png"}   layout='fill' objectFit='contain'/>
                </i>
            </div>
        </div>
    );
}

export default index;