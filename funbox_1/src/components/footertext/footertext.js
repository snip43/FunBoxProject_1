import React from 'react';
import styles from './footertext.module.css';
// import { Link } from 'react-router-dom';

const Footertext = ({ text_under_pack }) => {
  return (
    <div className={styles.card_footer_text}>
      {text_under_pack}
      {/* <Link to="#">купи</Link> */}
    </div>
  );
};
export default Footertext;
