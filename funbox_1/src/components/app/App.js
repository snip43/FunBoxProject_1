import React from 'react';
import styles from './App.module.css';
import Header from '../header/header';
import Packs from '../packs/packs';

const App = (props) => {
  const { header_text, packs } = props.state;
  return (
    <div className={`container ${styles.app}`}>
      <Header header_text={header_text} />
      <Packs packs={packs} />
    </div>
  );
};

export default App;
