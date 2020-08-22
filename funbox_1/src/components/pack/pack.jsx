import React from 'react';
import styles from './pack.module.css';

import Footertext from '../footertext/footertext';
import PackInfo from '../packInfo/packinfo';
import PackBigImage from '../packBigImage';

const Pack = () => {
  return (
    <div className={styles.pack_full}>
      <div className={styles.pack}>
        <a href="#" className={styles.pack_link}>
          <PackInfo />
          <PackBigImage />
          <div className={styles.pack_imgWeight}>
            <div className={styles.pack_imgWeight_content}>
              <span className={styles.pack_value_weight}>0,5</span>
              <span className={styles.pack_value_text}> кг</span>
            </div>
          </div>
        </a>
      </div>
      <Footertext />
    </div>
  );
};

export default Pack;
