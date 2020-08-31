import React from 'react';
import styles from './footertext.module.css';
// import { Link } from 'react-router-dom';

const Footertext = ({ text_under_pack }) => {
  // let regExp = /купи/gi;
  // let strBuy = <Link to="#">купи</Link>;
  // let newStr = text_under_pack.replace(regExp, strBuy);

  return (
    <div className={styles.card_footer_text}>
      <div>{text_under_pack}</div>
    </div>
  );
};
export default Footertext;
