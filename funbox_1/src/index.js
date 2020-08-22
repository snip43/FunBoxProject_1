import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';
import state from './services/state';

ReactDOM.render(<App state={state} />, document.getElementById('root'));
