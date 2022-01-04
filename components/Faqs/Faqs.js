import React, { useState } from "react";
import { Collapse } from "reactstrap";
import styles from "./faq.module.scss";

const Faqs = () => {
  const [is_open, set_open] = useState("");

  const data = [
    {
      que: "WHERE CAN I VIEW MY NFTS ?",
      ans: "Once minted, simply connect to your OpenSea account to view your NFTs.",
    },
    {
      que: "WHAT IS NFT STAKING AND WHAT ARE RICH APEZ TOKENS?",
      ans: "NFT Staking is a reward system for HODL'ing your NFT's. We will launch a Rich Apez Token to reward our HODLR's.",
    },
    {
      que: "HOW CAN RICH APEZ BE USED IN THE METAVERSE?",
      ans: "Rich Apez can be used in the metaverse by getting the 3D Files from the Rich Apez members only shop and bringing them into decentraland and sandbox",
    },
    {
      que: "HOW CAN I MINT AN NFT?",
      ans: "You mint a Rich Apez NFT on Pre Sale or Public Mint day only. The collection is limited and the collection will sell out.",
    },
    // {
    //   que: "HOW DO MINT A RICH APE?",
    //   ans: "Make sure to have your ETH and metamask wallet ready!",
    // },
    {
      que: "HOW DO I CONNECT WITH THE COMMUNITY?" ,
      ans: "You can connect with the Rich Ape Community on the official Rich Ape Discord",
    },
  ];
  return (
    <div id="faq" className={styles.faq_container}>
      <section className={styles.header_sec}>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </section>
      <section className={styles.faq_body}>
        {data.map((item, i) => {
          return (
            <div className={styles.faq_item_container}>
              <div
                onClick={() => set_open(i)}
                className={styles.header_container}
              >
                <h6>{item.que}</h6>
                <img
                  className={is_open === i ? styles.rotate : ""}
                  src="/Assets/hel.svg"
                />
              </div>
              <Collapse isOpen={is_open === i}>
                <p>
                  {item.ans}{" "}
                  {i === 5 ? (
                    <a
                      href="https://discord.com/invite/GzxuKr6bdt"
                      target="_blank"
                    >
                      here
                    </a>
                  ) : (
                    ""
                  )}
                </p>
              </Collapse>
            </div>
          );
        })}
      </section>
      <section className={styles.action_container}>
        <div className={styles.image_container}>
          <img src="/Assets/faq_image.png" />
        </div>
        <h2>THE APEZ ARE COMING</h2>
        <h1>Get With The Apez! Join our Discord</h1>
        <a href="https://discord.com/invite/GzxuKr6bdt" target="_blank">
          <button className="btn">Join Our Discord</button>
        </a>
      </section>
    </div>
  );
};

export default Faqs;
