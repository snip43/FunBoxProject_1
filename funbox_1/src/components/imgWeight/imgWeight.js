import React from 'react';
import styles from './imgWeight.module.css';

const ImgWeight = ({ card_weight, selected }) => {
  const clSelected = `${styles.pack_hover}`;
  const clDefault = `${styles.pack_imgWeight}`;
  const classes = selected ? clSelected : clDefault;

  return (
    <div className={classes}>
      <div className={styles.pack_imgWeight_content}>
        <span className={styles.pack_value_weight}>{card_weight}</span>
        <span className={styles.pack_value_text}> кг</span>
      </div>
    </div>
  );
};
export default ImgWeight;
