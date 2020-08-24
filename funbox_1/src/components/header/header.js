import React from 'react';
import styles from './header.module.css';
// import MyContext from '../../services/Context';

const Header = ({ header_text }) => {
  return <div className={styles.header_title}>{header_text}</div>;
};

export default Header;
