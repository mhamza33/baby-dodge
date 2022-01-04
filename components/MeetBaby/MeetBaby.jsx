import React from "react";
import styles from "./meet-baby.module.scss";
const MeetBaby = () => {
  const data = [
    "/ape1.jpg",
    "/ape2.jpg",
    "/ape3.jpg",
    "/ape4.jpg",
    "/ape5.jpg",
    "/ape6.jpg",
    "/ape7.jpg",
    "/ape8.jpg",
    "/ape9.jpg",
    "/ape10.jpg",
  ];
  return (
    <div className={styles.meet_container}>
      <div className={styles.meet_header}>
        <h1>
          MEET THE <span>BABY <br/> DOGE MOON CLUB</span>
        </h1>
      </div>
      <div className={styles.meet_body}>
        {data.map((item) => {
          return (
            <div className={styles.img_container}>
              <img src={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetBaby;
