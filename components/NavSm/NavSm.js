import React, { useState } from "react";
import Link from "next/link";
import { Modal } from "reactstrap";
import { Drawer } from "antd";
import styles from "./nav-sm.module.scss";
const NavSm = () => {
  const [isOpen, setOPen] = useState(false);
  const [showCS, setShowCS] = useState(false);
  return (
    <div className={styles.nav_sm_container}>
      <div className={styles.logo_container}>
        <img src="/Assets/logo.png" />
      </div>
      <div className={styles.hamburger_container}>
        <img onClick={() => setOPen(true)} src="/Assets/menu.svg" />
      </div>
      <Drawer
        title=""
        placement="right"
        closable={true}
        onClose={() => setOPen(false)}
        visible={isOpen}
      >
        <div className={styles.drawer_container}>
          <div className={styles.header_sec}>
            <div className={styles.logo_container}>
              <img src="/Assets/logo.png" />
            </div>
          </div>
          <div className={styles.drawer_body}>
            <Link href="#about">
              <p onClick={()=>setOPen(false)} >About</p>
            </Link>
            <Link href="#feature">
              <p onClick={()=>setOPen(false)}>Feature</p>
            </Link>
            <Link href="#roadmap">
              <p onClick={()=>setOPen(false)}>Roadmap</p>
            </Link>
            <Link href="#team">
              <p onClick={()=>setOPen(false)}>Team</p>
            </Link>
            <Link href="#faq">
              <p onClick={()=>setOPen(false)}>FAQ</p>
            </Link>
          </div>
        </div>
      </Drawer>
      <Modal centered isOpen={showCS} toggle={() => setShowCS(false)}>
        <div className={styles.coming_soon_modal}>
          <div className={styles.modal_body}>
            <i onClick={() => setShowCS(false)} class="fas fa-times"></i>
            <div className={styles.img_container}>
              <img src="/Assets/alpha_new/sunny_logo.png" />
            </div>
            <div className={styles.title_container}>
              <h1>COMING SOON</h1>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NavSm;
