import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';

import {
    Icon,
  } from "semantic-ui-react";

function SearchInput(props) {
    return (
        <div className={styles.search_container}>
           <div className={styles.search_input_container}>
                <input type="text" className={styles.search_input} placeholder="Search and Find"/>
                <i className={styles.search_icon_container}>
                    <Icon name="search"/>
                </i>
           </div>
        </div>
    );
}

export default SearchInput;