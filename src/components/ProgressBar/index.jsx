import React, {useEffect, useState, useRef} from 'react';
import styles from "./styles.module.css";
function index({totalHours, completeHours}) {

    const [percentage, setPercentage] = useState(0);

    const myRef = useRef(null);

    const calcPercentage = () =>{
        let hundredPercentageStep = (472/100);
        let realPercentage = (completeHours * 100)/totalHours;
        let pixelCirculeMovement = (hundredPercentageStep * realPercentage);
        myRef.current.style.strokeDashoffset = 472 - (pixelCirculeMovement - 23.6);
        setPercentage(realPercentage);
    }
    
    useEffect(() => {
        calcPercentage();
    },[totalHours, completeHours])

    return (
        <section className={styles.progressbar_container}>
        <p className={styles.progressbar_tittle}>Progress overview</p>

        <div className={styles.progressbar}>
          <div className={styles.skills}>
            <div className={styles.outer}>
              <div className={styles.inner}>
                <div className={styles.number}>{percentage}<small>%</small></div>
              </div>
            </div>
              <svg className={styles.svg_bg} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor_bg">
                      <stop offset="0%" stop-color="#ff794f" />
                      <stop offset="100%" stop-color="#ff794f" />
                    </linearGradient>
                </defs>
                <circle className={styles.circle_bg} cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#FED200" />
                      <stop offset="100%" stop-color="#FED200" />
                    </linearGradient>
                </defs>
                <circle ref={myRef} className={styles.circle} cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg> 
          </div>
        </div>

        <div className={styles.stats_container}>

            <div className={styles.complete_container}>
              <small className={styles.small_text}>
                <i className={styles.complete_icon}></i>
                Completed
              </small>
              <p className={styles.hours}><strong>{completeHours}</strong> hours</p>
            </div>

            <span className={styles.separation}></span>

            <div className={styles.left_container}>
              <small className={styles.small_text}>
                <i className={styles.left_icon}></i>
                Left to go
              </small>
              <p className={styles.hours}><strong>{totalHours - completeHours}</strong> hours</p>
            </div>
            
        </div>
      </section>
    );
}

export default index;