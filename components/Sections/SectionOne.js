import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./sec.module.scss";
const SectionOne = () => {
  return (
    <div id="about" className={styles.section_container}>
      <section className={styles.section_content}>
        <Row>
          <Col sm={12} md={6}>
            <section className={styles.sec_content}>
              {/* <small>Members Only</small> */}
              <h1>RICH APEZ METAVERSE</h1>
              <br/>
              <p>
                Rich Apez is a 3D NFT Collection that leads into the metaverse
                of the Apez as each Ape comes with a 3D file so you can wear
                your Apez outfit in the Metaverse.
              </p>
              <p>
                Rich Apez will have their own exclusive digital merch that you
                can wear in the metaverse and physical merch, exclusively for
                Rich Apez NFT Collectors.
              </p>
              <a href="https://discord.com/invite/GzxuKr6bdt" target="_blank" >
              <button className="btn">Join Our Discord</button>
              </a>
            </section>
          </Col>
          <Col sm={12} md={6}>
            <section className={styles.sec_image}>
              {/* <img src="/Assets/sec_1.png" /> */}
              <video autoPlay muted playsInline>
                <source src="/Assets/sec_vid.mp4" type="video/mp4" />
              </video>
            </section>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default SectionOne;
