import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./sec.module.scss";
const SectionTwo = () => {
  return (
    <div id="feature" className={styles.section_container}>
      <section className={styles.section_content}>
        <Row>
          <Col sm={12} md={6}>
            <section className={styles.sec_image}>
              <img src="/Assets/section_2.png" />
            </section>
          </Col>
          <Col sm={12} md={6}>
            <section className={styles.sec_content}>
              {/* <small>Rich Apez</small> */}
              <h1>MEMBERS ONLY ACCESS</h1>
              <p>
                Rich Apez Tokens are more than NFT’s. Your Rich Ape gives you
                exclusive access to the Rich Apez 3D Metaverse Outfits, Content,
                and Accesss to Merch that only members can access.
              </p>
              <a href="https://discord.com/invite/GzxuKr6bdt" target="_blank" >
              <button className="btn">Join Our Discord</button>
              </a>
            </section>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default SectionTwo;
