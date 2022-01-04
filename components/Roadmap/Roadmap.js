import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./roadmap.module.scss";
const Roadmap = () => {
  const data = [
    {
      image: "/Assets/road/bb1.png",
      title: "APEZ ON PARADE",
      des_1:
        "The Rich Apez Collection is a completely 3D Rendered NFT Collection that has been handcrafted for months by the team of Rich Ape artists to give the highest quality NFT’s to the market.",
      des_2:
        "The goal for Rich Apez is to completely go ape on the PFP market and take the Apez to the Metaverse.",
      des_3:
        "Each Ape comes with an NFT and will act as an access pass where you can buy Rich Apez Clothes and Accessories for the metaverse",
    },
    {
      image: "/Assets/road/bb2.jpg",
      title: "METAVERSE & IRL",
      des_1:
        "The Rich Apez are designed so each ape’s accessories can be worn, traded, and shown off in the metaverse.",
      des_2:
        "The Rich Apez Metaverse clothing and accessories will be available to purchase for all Rich Ape Holders in an all exclusive merch shop.",
      des_3:
        "Rich Apez will also give members exclusive access to dope phyical merch only members can buy",
    },
    {
      image: "/Assets/road/bb3.jpg",
      title: "APEZ AIRDROPZ",
      des_1:
        "Once the Rich Apez Phase 1 is completely sold out - all ape owners will receive a special airdrop of the newest member of the Rich Apez Society Family",
      des_2:
        "Only Rich Apez holders will be air dropped these NFT’s and none will be sold to the general public, making it an exclusive collection for holders only.",
      des_3: "",
    },
    {
      image: "/Assets/road/bb4.jpg",
      title: "THE RICH APE METAVERSE",
      des_1: "The Rich Apez Metaverse Activated! ",
      des_2:
        "As the Rich Apez collection sells out, our goal will be to move the Apez beyond an NFT’s.",
      des_3:
        "The Rich Apez will have its own token, metaverse, plots of land within the metaverse, collaborations, surprise events, real life events, celebrity hosted collabs, and much more!",
    },
  ];
  return (
    <div className={styles.roadmap_container}>
      <section className={styles.roadmap_header}>
        <img src="/Assets/logo.png" />
        <p>
          Rich Apez is a collection of 9,969 NFTs— Each NFT is Modeled in 3D and
          is 100% Unique.
        </p>
        <p>
          Your Rich Apez Token doubles as your Membership to the Club and grants
          access to members-only benefits like access to the Rich Apez Metaverse
          Clothing Shop, exclusive merch, and more!
        </p>
        <p>
          The Goal of the collection is take the Apez to the Metaverse! Imagine
          wearing your Apezoutfits in the Metaverse and looking fly in 3D
        </p>
      </section>
      <section className={styles.roadmap_body}>
        {data.map((item) => {
          return (
            <div className={styles.road_item_container}>
              <Row>
                <Col sm={12} md={4}>
                  <div className={styles.img_container}>
                    <img src={item.image} />
                  </div>
                </Col>
                <Col sm={12} md={8}>
                  <div className={styles.content_sec}>
                    <h1>{item.title}</h1>
                    <p>{item.des_1}</p>
                    <p>{item.des_2}</p>
                    <p>{item.des_3}</p>
                    <div className={styles.btn_container} >
                    <button className="btn" >Join Our Discord </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Roadmap;
