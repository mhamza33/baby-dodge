import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./DogeToTheMoon.module.scss";

const DogeToTheMoon = () => {
  return (
    <div className={styles.wellcome_container}>
      <Row>
        <Col sm={12} md={6}>
          <section className={styles.sec_right}>
            <img src="/creative_ape.jpg" />
          </section>
        </Col>
        <Col sm={12} md={6}>
          <section className={styles.sec_left}>
            <h1>
              <span>BABY DOGE</span> TO THE MOON
            </h1>
            <p>
              BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
              collectibles living on the Ethereum blockchain. Your Bored Ape
              doubles as your Yacht Club membership card, and grants access to
              members-only benefits.
            </p>
            <div className={styles.btn_container}>
              <button className="btn">JOIN DISCORD</button>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default DogeToTheMoon;
