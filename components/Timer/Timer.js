import React from 'react';
import styles from './timer.module.scss';
const Timer = () => {
  return (
    <div className={styles.timer_container}>
      <section className={styles.timer_content}>
          <h1>BILLIONAIRE CLUB REGISTRATION</h1>
        <div className={styles.timer_items_container}>
          <div className={styles.timer_item}>
            <h2>01</h2>
            <h2>Day</h2>
          </div>
          <div className={styles.timer_item}>
            <h2>23</h2>
            <h2>Minutes</h2>
          </div>
          <div className={styles.timer_item}>
            <h2>45</h2>
            <h2>Seconds</h2>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button className='btn'>SAVE YOUR PLACE</button>
        </div>
      </section>
    </div>
  );
};

export default Timer;
