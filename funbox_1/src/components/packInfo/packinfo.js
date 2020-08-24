import React from 'react';
import styles from './packinfo.module.css';

const PackInfo = ({
  card_info_title,
  card_info_subtitle_top,
  card_info_subtitle_bottom,
  card_info_text,
}) => {
  return (
    <div className={styles.pack_info}>
      <div className={styles.pack_info_subtitle_top}>{card_info_subtitle_top}</div>
      <div className={styles.pack_info_title}>{card_info_title}</div>
      <div className={styles.pack_info_subtitle_bottom}>{card_info_subtitle_bottom}</div>
      <div className={styles.pack_info_text}>{card_info_text}</div>
    </div>
  );
};

export default PackInfo;
