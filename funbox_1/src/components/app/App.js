import React from 'react';
import styles from './App.module.css';
import { Container } from 'reactstrap';
import Header from '../header/header';
import Pack from '../card/pack';

const App = () => {
  return (
    <Container className={styles.app} fluid>
      <Header />
      <div className={styles.packs}>
        <Pack />
        <Pack />
      </div>
    </Container>
  );
};

export default App;
