import React from 'react';
import styles from './footertext_disable.module.css';

const FootertextDisable = ({ text_under_pack }) => {
  return <div className={styles.text_disable}>{text_under_pack}</div>;
};
export default FootertextDisable;
