import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import SearchInput from '../SearchInput/index';
import BurgerButtom from '../BurgerButtom/index';
import NotificationItem from '../NotificationItem/index';
function Header(props) {
    const [isOpenNotifications, setIsOpenNotifications] = useState(false);
    const notificationRef = useRef(null);

    useEffect(() => {
        const checkIfClickedOutside = (event) => {
          if (
            notificationRef &&
            notificationRef.current &&
            !notificationRef.current.contains(event.target)
            ) {
                setIsOpenNotifications(false);
            }
          };
          document.addEventListener("click", checkIfClickedOutside);
          
          return () => {
            // Cleanup the event listener
            document.removeEventListener("click", checkIfClickedOutside);
          };
        }, [isOpenNotifications]);
    return (
        <div className={styles.header}>
            <div className={styles.btn_container}>
                <BurgerButtom color={"gray"}/>
            </div>
            <i className={styles.brand_img_container}>
                <Image alt="" src={"/images/Group@1,5x.svg"}   layout='fill' objectFit='contain'/>
            </i>
            <div className={styles.desktop_items_container}>
                <div className={styles.search_container}>
                <SearchInput/>
                </div>
                <button className={styles.add_btn}>+ ADD</button>
                <i className={styles.icon_container}  ref={notificationRef} onClick={() => setIsOpenNotifications((oldState) => !oldState)}>
                    <Image alt="" src={"/images/notification.png"}  layout='fill' objectFit='contain'/>
                    <span className={styles.notification_light}></span>
                    {isOpenNotifications &&
                        <div className={styles.notifications_container} >
                            <span className={styles.notifications_container_row}></span>
                            <NotificationItem img={"notificationImg.png"} text={"You have a new session to re…"} date={"Today, 10:30AM"}/>
                            <NotificationItem img={"notificationImg.png"} text={"You have a new session to re…"} date={"Today, 10:30AM"}/>
                            <NotificationItem img={"notificationImg.png"} text={"You have a new session to re…"} date={"Today, 10:30AM"}/>
                        </div>
                    }
                </i>
                <i className={styles.icon_container}>
                    <Image alt="" src={"/images/message.png"}  layout='fill' objectFit='contain'/>
                </i>
            </div>
            <div className={styles.profile_container}>
                    <p>Daniel Garcia</p>
                <i className={styles.profile_img_container}>
                    <Image alt="" src={"/images/Placeholders/Profile/userImg.svg"}   layout='fill' objectFit='contain'/>
                </i>
                <i className={styles.icon_profile}>
                    <Image alt="" src={"/images/row.png"}   layout='fill' objectFit='contain'/>
                </i>
            </div>
        </div>
    );
}

export default Header;