import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.header_container}>
      <Row className="flex-column-reverse flex-md-row" >
        <Col sm={12} md={6}>
          <section className={styles.sec_left}>
            <div className={styles.logo_container}>
              <img src="/ape16.jpg" />
            </div>
            <h1 className={styles.is_colored}>BABY DOGE</h1>
            <h1>MOON CLUB</h1>
            <p>
              BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
              collectibles living on the Ethereum blockchain. Your Bored Ape
              doubles as your Yacht Club membership card, and grants access to
              members-only benefits.
            </p>
            <button className="btn">JOIN DISCORD</button>
          </section>
        </Col>
        <Col sm={12} md={6}>
          <section className={styles.sec_right}>
            <img src="/header_img.png" />
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
