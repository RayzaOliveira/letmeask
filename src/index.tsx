import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// DOM => Document Object Model
// JSX => HTML dentro do JS
