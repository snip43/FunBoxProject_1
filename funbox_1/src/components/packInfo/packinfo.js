import React from 'react';
import styles from './packinfo.module.css';

const PackInfo = () => {
  return (
    <div className={styles.pack_info}>
      <div className={styles.pack_info_subtitle_top}>Сказочное заморское яство</div>
      <div className={styles.pack_info_title}>Нямушка</div>
      <div className={styles.pack_info_subtitle_bottom}>с фуа-гра</div>
      <div className={styles.pack_info_text}>10 порций мышь в подарок</div>
    </div>
  );
};

export default PackInfo;
