import React, { useState } from "react";
import { Col, Row, Collapse } from "reactstrap";
import styles from "./roadmap.module.scss";
const RoadmapNew = () => {
  const [is_open, set_open] = useState("");
  return (
    <div id="roadmap" className={styles.roadmap_container}>
      <section className={styles.roadmap_header}>
        <h1>THE TEAM</h1>
        <h1>
          BABY DOGE MOON CLUB <span>ROADMAP</span>
        </h1>
        <p>
          BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
          collectibles living on the Ethereum blockchain. Your Bored Ape doubles
          as your Yacht Club membership card, and grants access to members-only
          benefits.
        </p>
      </section>
      <section className={styles.roadmap_body}>
        <Row>
          <Col sm={12} md={5}>
            <div className={styles.img_sec}>
              <img src="/bored_ape.jpg" />
            </div>
          </Col>
          <Col sm={12} md={7}>
            <div className={styles.content_sec}>
              <div className={styles.content_item}>
                <button className="btn">PHASE 1 </button>
                <h3>access to members-only benefits</h3>
                <p onClick={() => set_open("1")}>+</p>
              </div>
              <Collapse isOpen={is_open === "1"}>
                <div className={styles.collapse_content}>
                  <p>
                    The Rich Apez Collection is a completely 3D Rendered NFT
                    Collection that has been handcrafted for months by the team
                    of Rich Ape artists to give the highest quality NFT’s to the
                    market.
                  </p>
                  <p>
                    The goal for Rich Apez is to completely go ape on the PFP
                    market and take the Apez to the Metaverse.
                  </p>
                  <p>
                    Each Ape comes with an NFT and will act as an access pass
                    where you can buy Rich Apez Clothes and Accessories for the
                    metaverse
                  </p>
                </div>
              </Collapse>
              <div className={styles.content_item}>
                <button className="btn">PHASE 2 </button>
                <h3>access to members-only benefits</h3>
                <p onClick={() => set_open("2")}>+</p>
              </div>
              <Collapse isOpen={is_open === "2"}>
                <div className={styles.collapse_content}>
                  <p>
                    The Rich Apez are designed so each ape’s accessories can be
                    worn, traded, and shown off in the metaverse.
                  </p>
                  <p>
                    The Rich Apez Metaverse clothing and accessories will be
                    available to purchase for all Rich Ape Holders in an all
                    exclusive merch shop.
                  </p>
                  <p>
                    Rich Apez will also give members exclusive access to dope
                    phyical merch only members can buy
                  </p>
                </div>
              </Collapse>
              <div className={styles.content_item}>
                <button className="btn">PHASE 3 </button>
                <h3>access to members-only benefits</h3>
                <p onClick={() => set_open("3")}>+</p>
              </div>
              <Collapse isOpen={is_open === "3"}>
                <div className={styles.collapse_content}>
                  <p>
                    Once the Rich Apez Phase 1 is completely sold out - all ape
                    owners will receive a special airdrop of the newest member
                    of the Rich Apez Family.
                  </p>
                  <p>
                    Only Rich Apez holders will be air dropped these NFT’s and
                    none will be sold to the general public, making it an
                    exclusive collection for holders only.{" "}
                  </p>
                </div>
              </Collapse>
              <div className={styles.content_item}>
                <button className="btn">PHASE 4 </button>
                <h3>access to members-only benefits</h3>
                <p onClick={() => set_open("4")}>+</p>
              </div>
              <Collapse isOpen={is_open === "4"}>
                <div className={styles.collapse_content}>
                  <p>The Rich Apez Metaverse Activated!</p>
                  <p>
                    As the Rich Apez collection sells out, our goal will be to
                    move the Apez beyond an NFT’s.
                  </p>
                  <p>
                    The Rich Apez will have its own token, metaverse, plots of
                    land within the metaverse, collaborations, surprise events,
                    real life events, celebrity hosted collabs, and much
                    more!Rich Apez NFT holders will also be rewarded for holding
                    with NFT Staking and Rich Apez Tokens
                  </p>
                </div>
              </Collapse>
              <div className={styles.content_item}>
                <button className="btn">PHASE 5 </button>
                <h3>access to members-only benefits</h3>
                <p onClick={() => set_open("4")}>+</p>
              </div>
              <Collapse isOpen={is_open === "4"}>
                <div className={styles.collapse_content}>
                  <p>The Rich Apez Metaverse Activated!</p>
                  <p>
                    As the Rich Apez collection sells out, our goal will be to
                    move the Apez beyond an NFT’s.
                  </p>
                  <p>
                    The Rich Apez will have its own token, metaverse, plots of
                    land within the metaverse, collaborations, surprise events,
                    real life events, celebrity hosted collabs, and much
                    more!Rich Apez NFT holders will also be rewarded for holding
                    with NFT Staking and Rich Apez Tokens
                  </p>
                </div>
              </Collapse>
              <div className={styles.content_item}>
                <button className="btn">PHASE 6 </button>
                <h3>access to members-only benefits</h3>
                <p onClick={() => set_open("4")}>+</p>
              </div>
              <Collapse isOpen={is_open === "4"}>
                <div className={styles.collapse_content}>
                  <p>The Rich Apez Metaverse Activated!</p>
                  <p>
                    As the Rich Apez collection sells out, our goal will be to
                    move the Apez beyond an NFT’s.
                  </p>
                  <p>
                    The Rich Apez will have its own token, metaverse, plots of
                    land within the metaverse, collaborations, surprise events,
                    real life events, celebrity hosted collabs, and much
                    more!Rich Apez NFT holders will also be rewarded for holding
                    with NFT Staking and Rich Apez Tokens
                  </p>
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default RoadmapNew;
