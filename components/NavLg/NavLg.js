import React from "react";
import Link from "next/link";
import styles from "./nav-lg.module.scss";

const NavLg = () => {
  return (
    <div className={styles.nav_lg_container}>
      <div className={styles.logoContainer}>
        <h2>BD</h2>
        <img src="/Assets/header/headerImage.png" />
        <h2>MC</h2>
      </div>

      <div className={styles.rightContainer}>
        <nav>
          <ul>
            <li>Get a Baby Doge</li>
            <li>About the club</li>
            <li>The Collection</li>
            <li>Join the community</li>
          </ul>
        </nav>
        <div className={styles.socialContainer}>
          <img src="/Assets/header/youtube.svg" />
          <img src="/Assets/social/Instagram.svg" />
          <img src="/Assets/header/discord.svg" />
          <img src="/Assets/header/twitter.svg" />
        </div>
      </div>
      {/* <section className={styles.nav_items_sec}>
        <Link href="#about">
          <p>About</p>
        </Link>
        <Link href="#feature">
          <p>Feature</p>
        </Link>
        <Link href="#roadmap">
          <p>Roadmap</p>
        </Link>
        <Link href="#team">
          <p>Team</p>
        </Link>
        <Link href="#faq">
          <p>FAQ</p>
        </Link>
      </section> */}
    </div>
  );
};

export default NavLg;
