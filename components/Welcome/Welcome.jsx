import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <div className={styles.wellcome_container}>
      <Row>
        <Col sm={12} md={6}>
          <section className={styles.sec_left}>
            <h1>
              WELCOME TO THE
              <span>BABY DOGE MOON CLUB</span>
            </h1>
            <p>
              BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
              collectibles living on the Ethereum blockchain. Your Bored Ape
              doubles as your Yacht Club membership card, and grants access to
              members-only benefits.
            </p>
            <div className={styles.btn_container} >
            <button className="btn">JOIN DISCORD</button>
              </div>
          </section>
        </Col>
        <Col sm={12} md={6}>
          <section className={styles.sec_right}>
            <img src="/Welcome.jpg" />
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
