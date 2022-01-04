import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./team.module.scss";
const OurTeam = () => {
  const data = [
    {
      image: "/Assets/team/1.png",
      name: "ROSEZ",
      designation: "Co-Founder",
    },
    {
      image: "/Assets/team/2.png",
      name: "Double R",
      designation: "Co-Founder",
    },
    {
      image: "/Assets/team/3.png",
      name: "CODEY",
      designation: "The Engineer",
    },
    {
      image: "/Assets/team/4.png",
      name: "SHEILA",
      designation: "The 2D Artist",
    },
    {
      image: "/Assets/team/5.jpg",
      name: "KENZO",
      designation: "The 3D Art Director",
    },
    {
      image: "/Assets/team/6.png",
      name: "AAROON",
      designation: "The Marketer",
    },
    {
      image: "/Assets/team/7.png",
      name: "Sun One",
      designation: "The Strategist",
    },
    {
      image: "/Assets/team/8.png",
      name: "YEEKINI",
      designation: "The Discord Godess",
    },
  ];
  return (
    <div id="team" className={styles.our_team_container}>
      <section className={styles.header_sec}>
        <h1>OUR TEAM</h1>
        <p>
          Rich Apez was is brought to you by the brightest minds in crypto,
          entertainmanet, and blockchain to create the best experience for the
          project. Rich Apez is dedicated to utlity and future community
          building to make the project a success.
        </p>
      </section>
      <section className={styles.our_team_body}>
        <Row>
          {data.map((item) => {
            return (
              <Col sm={6} md={3}>
                <div className={styles.team_item_container}>
                  <img className={styles.main_img} src={item.image} />
                  <p>
                    <b>{item.name}</b>
                  </p>
                  <p>{item.designation}</p>
                  {/* <div className={styles.social_container}>
                    <img src='/Assets/insta.svg' />
                    <img src='/Assets/linkedin.svg' />
                  </div> */}
                </div>
              </Col>
            );
          })}
        </Row>
      </section>
      <section className={styles.our_team_footer}>
      <a href="https://discord.com/invite/GzxuKr6bdt" target="_blank" >
        <button className="btn" >Join Our Discord </button>
        </a>
      </section>
    </div>
  );
};

export default OurTeam;
