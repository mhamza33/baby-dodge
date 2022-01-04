import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './dev-roadmap.module.scss';

const DevRoadmap = () => {
  return (
    <div className={styles.dev_roadmap_container}>
      <div className={styles.header_sec}>
        <h1>DEVELOPMENT ROADMAP</h1>
        <p>
          Our goal is to make sure your investment is highly profitable. To do
          so, we will set up several strategies (fusion, reduce supply,
          marketing & community push simultaneously) after the launch in order
          to increase the floor price.
        </p>
      </div>
      <div className={styles.dev_roadmap_body}>
        <div className={styles.roadmap_item}>
          <Row  >
            <Col sm={12} md={4}>
              <section className={styles.sec_heading}>
                <h1>METAVERSE DEVELOPMENT</h1>
              </section>
            </Col>
            <Col sm={12} md={8}>
              <section className={styles.section_box}>
                <p>
                  Expanding our presence in the metaverse and creating a
                  Billionaire Club currency to shape the future of our
                  community. All NFTs acquired will be used safely.
                </p>
              </section>
            </Col>
          </Row>
        </div>

        <div className={styles.roadmap_item}>
          <Row className="flex-column-reverse flex-md-row">
            <Col sm={12} md={8}>
              <section className={styles.section_box}>
                <p>
                  Once we sell out, all of our holders will have access to
                  private business development circles in these 4 following
                  fields :TRADING - NFT - E-COMMERCE - REAL ESTATE. Theses clubs
                  will be led and hosted by moguls, experienced speakers and
                  well-known entrepreneurs.
                </p>
              </section>
            </Col>
            <Col sm={12} md={4}>
              <section className={styles.sec_heading}>
                <h1 className={styles.is_white}>VALUE CLUB</h1>
              </section>
            </Col>
          </Row>
        </div>

        <div className={styles.roadmap_item}>
          <Row>
            <Col sm={12} md={4}>
              <section className={styles.sec_heading}>
                <h1>WORLDWIDE EVENT</h1>
              </section>
            </Col>
            <Col sm={12} md={8}>
              <section className={styles.section_box}>
                <p>
                  The most active members of our community will be invited to a
                  private party in the city of angels : Los Angeles. Other
                  physical reunions will be organized in world famous cities.
                </p>
              </section>
            </Col>
          </Row>
        </div>

        <div className={styles.roadmap_item}>
          <Row className="flex-column-reverse flex-md-row">
            <Col sm={12} md={8}>
              <section className={styles.section_box}>
                <p>
                  The billionaire club will expand to another dimension :
                  challenges & social experiences. During game nights, the
                  holders will have to split into teams (with captains and team
                  players) to win valuable prizes.
                </p>
              </section>
            </Col>
            <Col sm={12} md={4}>
              <section className={styles.sec_heading}>
                <h1 className={styles.is_white}>WEEKLY COMPETITION</h1>
              </section>
            </Col>
          </Row>
        </div>

        <div className={styles.roadmap_item}>
          <Row>
            <Col sm={12} md={4}>
              <section className={styles.sec_heading}>
                <h1>EVOLUTION OF THE RANKS</h1>
              </section>
            </Col>
            <Col sm={12} md={8}>
              <section className={styles.section_box}>
                <p>
                  Make your voice heard. Being an active member of the community
                  will allow you to work your way up and have a bigger power of
                  decision through votes and surveys.
                </p>
              </section>
            </Col>
          </Row>
        </div>

        <div className={styles.roadmap_item}>
          <Row className="flex-column-reverse flex-md-row" >
            <Col sm={12} md={8}>
              <section className={styles.section_box}>
                <p>
                  Being part of the Billionaire Club will give you the right to
                  an annual bonus based on the number of NFTs (from our
                  collection) you possess.
                </p>
              </section>
            </Col>
            <Col sm={12} md={4}>
              <section className={styles.sec_heading}>
                <h1 className={styles.is_white}>ANNUAL REWARDS</h1>
              </section>
            </Col>
          </Row>
        </div>

        <div className={styles.roadmap_item}>
          <Row>
            <Col sm={12} md={4}>
              <section className={styles.sec_heading}>
                <h1>HUGE COLLABORATIONS</h1>
              </section>
            </Col>
            <Col sm={12} md={8}>
              <section className={styles.section_box}>
                <p>
                  Make your voice heard. Being an active member of the community
                  will allow you to work your way up and have a bigger power of
                  decision through votes and surveys.
                </p>
              </section>
            </Col>
          </Row>
        </div>

        <div className={styles.roadmap_item}>
          <Row className="flex-column-reverse flex-md-row">
            <Col sm={12} md={8}>
              <section className={styles.section_box}>
                <p>
                  We will work on the ability to merge your NFT’s in order to
                  increase their value and create rare items (burn).
                </p>
              </section>
            </Col>
            <Col sm={12} md={4}>
              <section className={styles.sec_heading}>
                <h1 className={styles.is_white}>FUSION</h1>
              </section>
            </Col>
          </Row>
        </div>
        <div className={styles.roadmap_item}>
          <Row>
            <Col sm={12} md={4}>
              <section className={styles.sec_heading}>
                <h1>GAME DEVELOPMENT</h1>
              </section>
            </Col>
            <Col sm={12} md={8}>
              <section className={styles.section_box}>
                <p>
                  We will develop a MMORPG based on the next chapters. All
                  phases will be useful. Holders of the Party Ape collection
                  will have a massive advantage in terms of resources due to
                  seniority. They will be able to use & trade their assets on a
                  marketplace with cryptocurrencies.
                </p>
              </section>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DevRoadmap;
