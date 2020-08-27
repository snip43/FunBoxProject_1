import React from 'react';
import styles from './header.module.css';
// import MyContext from '../../services/Context';

const Header = (props) => {
  return <div className={styles.header_title}>{props.header_text}</div>;
};

export default Header;
