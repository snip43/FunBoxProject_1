import React from 'react';
import styles from './imgWeight.module.css';

const ImgWeight = ({ card_weight, selected, isHover, disabled }) => {
  const clSelected = `${styles.hover}`;
  const clDefault = `${styles.imgWeight}`;
  const clDisabled = `${styles.disabled}`;
  const classes = selected || isHover ? clSelected : disabled ? clDisabled : clDefault;

  return (
    <div className={classes}>
      <div className={styles.imgWeight_content}>
        <span className={styles.value_weight}>{card_weight}</span>
        <span className={styles.value_text}> кг</span>
      </div>
    </div>
  );
};
export default ImgWeight;
