import React from 'react';
import styles from './footertext.module.css';

const Footertext = () => {
  return (
    <div className={styles.card_footer_text}>
      Чего сидишь? Порадуй котэ,
      <a href="#">купи</a>
    </div>
  );
};
export default Footertext;
