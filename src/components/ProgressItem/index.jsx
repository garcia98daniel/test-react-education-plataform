import React from 'react';
import styles from "./styles.module.css";

function ProgressItem({text, number, active}) {
    return (
        <div className={active ? `${styles.progressItem_container} ${styles.active }`: styles.progressItem_container}>
            <p>{text}</p>
            <h1>{number}</h1>
        </div>
    );
}

export default ProgressItem;