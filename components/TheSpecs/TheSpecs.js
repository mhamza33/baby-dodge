import React from "react";
import styles from "./spec.module.scss";
const TheSpecs = () => {
  const data = [
    {
      title: "OUT OF THIS WORLD ART",
      desc: "The Art Team Has worked to put one of the highest quality art aspects to the project to create on of the most supreme experiences in NFT’s",
    },
    {
      title: "ORIGINALITY",
      desc: "Each Rich Ape NFT is completely unique with over 200 unique attributes with original designs for clothing, attributes, accessories, and all",
    },
    {
      title: "COMMUNITY",
      desc: "The Rich Apez community ranges from whales, celebrities, top crypto influencers, and more. The community comes first with this projec",
    },
    {
      title: "METAVERSE",
      desc: "Built for PFP’s and Metaverse alike. Rich Apez is here to set a standard for all Metaverse Projects moving forward",
    },
    {
      title: "BUILT FOR FUTURE",
      desc: "This isn’t just a one and done, we have airdrops, events, collabs, merch, and out of this world gaming experiences ready for the Rich Apez. ",
    },
  ];
  return (
    <div className={styles.spec_container}>
      <section className={styles.spec_header}>
        <h1>THE SPECS</h1>
        <hr />
      </section>
      <section className={styles.spec_body}>
        {data.map((item) => {
          return (
            <section className={styles.spec_item_container}>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default TheSpecs;
