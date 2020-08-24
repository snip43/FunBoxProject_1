import React from 'react';
import styles from './App.module.css';
import Header from '../header/header';
import Packs from '../packs/packs';
// import MyContext from '../../services/Context';

const App = (props) => {
  const { header_text } = props.state;

  return (
    <div className={styles.app}>
      <Header header_text={header_text} />
      <Packs packs={props.state.packs} />
    </div>
  );
};

export default App;
