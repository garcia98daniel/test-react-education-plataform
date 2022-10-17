import React from 'react';
import styles from './styles.module.css'

function index({children, tittle, marginBottomTittle}) {
    return (
        <section className={styles.section_container}>
            <div className={styles.tittle_section_container} style={{marginBottom: `${marginBottomTittle}px`}}>
                <p className={styles.tittle_section}>{tittle}</p>
                <div className={styles.line}></div>
            </div>
            {children}
        </section>
    );
}

export default index;