import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
function index(props) {
    return (
        <div className={styles.header}>
            <button className={styles.btn_menu_container}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <i className={styles.brand_img_container}>
                <Image src={"/images/Group@1,5x.svg"}   layout='fill' objectFit='contain'/>
            </i>
            <i className={styles.profile_img_container}>
                <Image src={"/images/Placeholders/Profile/userImg.svg"}   layout='fill' objectFit='contain'/>
            </i>
        </div>
    );
}

export default index;