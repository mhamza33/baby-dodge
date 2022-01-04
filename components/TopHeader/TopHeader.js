import React from 'react';
import styles from './top-header.module.scss';
const TopHeader = () => {
  return (
    <div className={styles.top_header_conainer}>
      <div className={styles.top_header_content}>
        <img src='/Assets/header.png' />
      </div>
    </div>
  );
};

export default TopHeader;
