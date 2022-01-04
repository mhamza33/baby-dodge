import React from "react";
import NavLg from "../components/NavLg/NavLg";
import NavSm from "../components/NavSm/NavSm";
import Footer from "../components/Footer/Footer";
import styles from "../styles/landing.module.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import MeetBaby from "../components/MeetBaby/MeetBaby";
import Welcome from "../components/Welcome/Welcome";
import DogeToTheMoon from "../components/DogeToTheMoon/DogeToTheMoon";
import RoadmapNew from "../components/RoadmapNew/RoadmapNew";
import BeReady from "../components/BeReady/BeReady";

const Landing = () => {
  return (
    <div className={styles.landing_container}>
      <NavLg />
      <NavSm />
      <HeroSection />
      <Welcome />
      <MeetBaby/>
      <DogeToTheMoon />
      <BeReady />
      <RoadmapNew/>
      <Footer />
    </div>
  );
};

export default Landing;
