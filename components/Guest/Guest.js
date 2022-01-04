import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './guest.module.scss';

const data = [
  {
    image: '/Assets/guest/1.png',
    title: 'THE ORIENTAPE',
  },
  {
    image: '/Assets/guest/2.png',
    title: 'THE STREETAPE',
  },
  {
    image: '/Assets/guest/3.png',
    title: 'THE HOST',
  },
  {
    image: '/Assets/guest/4.png',
    title: 'THE A.I',
  },
  {
    image: '/Assets/guest/5.png',
    title: 'THE BLIND',
  },
  {
    image: '/Assets/guest/6.png',
    title: 'THE SILENT',
  },
  
];
const Guest = () => {
  return (
    <div className={styles.guest_container}>
      <section className={styles.section_top}>
        <Row>
          <Col sm={12} md={6}>
            <div className={styles.sec_left}>
              <h1>GOLDEN GUESTS</h1>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className={styles.sec_right}>
              <p>
                The Golden Guests edition by the Billionaire Club are the rarest
                NFTs. They are all hand drawn and have no element in common with
                the regular collection.
              </p>
              <small>Start from here for Presale</small>
              <button className='btn'>REGISTER PRESALE</button>
            </div>
          </Col>
        </Row>
      </section>
      <section className={styles.guest_item_container}>
        {data.map(item => {
          return (
            <div className={styles.guest_item}>
              <img src={item.image} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Guest;
