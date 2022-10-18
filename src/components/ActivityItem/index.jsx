import React, {useState} from 'react';
import styles from './styles.module.css'
import Image from "next/image";

function index({img, description}) {
    const [seeMore, setSeeMore] = useState(false)
    return (
        <div className={styles.activity_wrapper}>
            <div className={styles.activity_container} onClick={() => setSeeMore(!seeMore)}>
                <div className={styles.img_description_container}>
                    <div className={styles.img_container}>
                        <Image src={`/images/${img}`} layout="fill" objectFit="contain"/>
                    </div>
                    <p className={styles.description}>{description}</p>
                </div>
                <i className={seeMore ? styles.icon_container_active : styles.icon_container}>
                    <Image src="/images/row.png" layout="fill" objectFit="contain"/>
                </i>
            </div>
            {seeMore && (
                <p className={styles.moreInfo}>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                </p>
            )}
        </div>
    );
}

export default index;