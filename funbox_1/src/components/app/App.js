import React from 'react';
import styles from './App.module.css';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container className={styles.app} fluid>
      <h1 className={`${styles.header_title}`}>Ты сегодня покормил кота?</h1>
    </Container>
  );
}

export default App;
