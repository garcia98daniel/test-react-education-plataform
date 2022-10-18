import React from "react";
import styles from "./styles.module.css";
function BurgerButtom({color}) {
  return (
    <button className={styles.btn_menu_container} >
      <div style={{background: color}}></div>
      <div style={{background: color}}></div>
      <div style={{background: color}}></div>
    </button>
  );
}

export default BurgerButtom;
