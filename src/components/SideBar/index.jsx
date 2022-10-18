import React from 'react';
import styles from './styles.module.css';
import BurgerButtom from "../BurgerButtom/index";
import Image from "next/image";

function index(props) {
    return (
        <div className={styles.sideBar_container}>
            <div className={styles.options_container}>
                <div className={styles.option}>
                    <BurgerButtom color={"white"}/>
                </div>
                <div className={styles.option}>
                    <i className={styles.icon_container}>
                        <Image alt="" src={"/images/menu/home.png"} layout="fill" objectFit="contain"/>
                    </i>
                </div>
                <div className={styles.option}>
                    <i className={styles.icon_container}>
                        <Image alt="" src={"/images/menu/cubesSoft.png"} layout="fill" objectFit="contain"/>
                    </i>
                </div>
                <div className={styles.option}>
                    <i className={styles.icon_container}>
                        <Image alt="" src={"/images/menu/fileSoft.png"} layout="fill" objectFit="contain"/>
                    </i>
                </div>
                <div className={styles.option}>
                    <i className={styles.icon_container}>
                        <Image alt="" src={"/images/menu/statsSoft.png"} layout="fill" objectFit="contain"/>
                    </i>
                </div>
                <div className={styles.option}>
                    <i className={styles.icon_container}>
                        <Image alt="" src={"/images/menu/messageSoft.png"} layout="fill" objectFit="contain"/>
                    </i>
                </div>
            </div>
        </div>
    );
}

export default index;