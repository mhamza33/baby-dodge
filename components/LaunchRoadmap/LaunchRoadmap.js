import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './l-roadmap.module.scss';

const data = [
  {
    no: '1',
    title: 'GRAND OPENING',
    desc: 'Congratulations, you are on the guest list. Give your name to the bouncer and jump the line. Join the community on Discord. Get Aped up with us.',
  },
  {
    no: '2',
    title: 'ROUND OF SHOTS',
    desc: 'A $30,000 fund is available to finance the community’s creations, designs, and development. Also, 1% of the OpenSea fees are dedicated to this special fund, ensuring the Billionaire’s club longevity through common projects.',
  },
  {
    no: '3',
    title: 'DON’T STOP THE MUSIC',
    desc: 'Access to an Exclusive investments and business club (meetings, conferences, social events)… That’s not all, the lucky owners of our SPECIAL EDITION pieces will get monthly rewards and gifts as $500/month.',
  },
  {
    no: '4',
    title: 'CHAMPAGNE SHOWER',
    desc: 'In the Billionaire club, we are dedicated to giving back. For that reason, $30,000 will be given to a reputable charity picked by the community during a vote on Discord. Started from the bottom, we don’t forget where we come from.',
  },
  {
    no: '5',
    title: 'MAKE IT RAIN',
    desc: 'Daily raffles for an entire month with a chance to win $1000 per day. Monthly surprises for Party APE Holders : unlock exclusive merch release from the Billionaire Club’s Clockroam for holders. We will also create collectible figures and launch collaborations with artists. You will have to stay in touch for monthly Airdrops with future benefits.',
  },
  {
    no: '6',
    title: 'AFTER PARTY',
    desc: '100% The Party Ape liquidity pool is initiated. It’s time to sweep the floor to finish the party and initiate the next steps. Holders spotting the chapter two clues will have access to early rewards giving them a major heads up.',
  },
];
const LaunchRoadmap = () => {
  return (
    <div className={styles.launch_roadmap_container}>
      <div className={styles.header_sec}>
        <h1>LAUNCH ROADMAP</h1>
        <p>
          As we value our community and its creativity, our roadmap will be
          updated according to your comments and ideas.
        </p>
      </div>
      <div className={styles.launch_roadmap_body}>
        <VerticalTimeline layout='1-column-left' lineColor='#B250FF'>
          {data.map(item => {
            return (
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                contentStyle={{ background: 'black', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  black' }}
                date='2011 - present'
                iconStyle={{
                  background: 'black',
                  color: '#B250FF',
                  display: 'flex',
                  justifyContent: 'center',
                }}
                icon={<h2 style={{color:"#B250FF"}} >{item.no}</h2>}
              >
                <div className={styles.timeline_item}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default LaunchRoadmap;
