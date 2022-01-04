import React from "react";
import styles from "./BeReady.module.scss";

const BeReady = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>
          BE READY
          <span>BABY DOGE IS ABOUT TO KICK SOME ASS</span>
        </h1>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.block}>
          <img src="/ape12.jpg" />
          <p>@SHOGUN</p>
        </div>
        <div className={styles.block}>
          <img src="/ape11.jpg" />
          <p>@ZSQUARED</p>
        </div>
        <div className={styles.block}>
          <img src="/ape13.jpg" />
          <p>@YMNI</p>
        </div>
        <div className={styles.block}>
          <img src="/ape14.jpg" />
          <p>@PRADA</p>
        </div>
      </div>
    </div>
  );
};

export default BeReady;
