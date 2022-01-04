import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_content_container}>
        <Row>
          <Col sm={12} md={4}>
            <section className={styles.email_container}>
              <p>GET ON THE LIST</p>
              <div className={styles.email_input_container}>
                <input placeholder="Email Address" />
                <button className="btn">
                  <img src="/Assets/arrow.png" />
                </button>
              </div>
            </section>
          </Col>
          <Col sm={12} md={4}>
            <section className={styles.logo_container}>
              <h1>BD</h1>
              <img src="/Assets/header/headerImage.png" />
              <h1>MC</h1>
            </section>
          </Col>
          <Col sm={12} md={4}>
            <section className={styles.social_container}>
              <div className={styles.social_icons}>
                <img src="/Assets/header/youtube.svg" />
                <img src="/Assets/social/Instagram.svg" />
                <img src="/Assets/header/discord.svg" />
                <img src="/Assets/header/twitter.svg" />
              </div>
              <p>© 2021 Yuga Labs LLC. All rights reserved</p>
            </section>
          </Col>
        </Row>
      </div>
      <div className={styles.footer_line} >

      </div>
    </div>
  );
};

export default Footer;
