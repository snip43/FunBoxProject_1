import React from 'react';
import styles from './App.module.css';
import Header from '../header/header';
import Pack from '../pack/pack';
// import Footertext from '../footertext';

const App = () => {
  return (
    <div className={`container-fluid ${styles.app}`}>
      <Header />
      <div className={styles.packs}>
        <Pack />
        <Pack />
      </div>
    </div>
  );
};

export default App;
