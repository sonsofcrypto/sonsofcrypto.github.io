import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import App from "./containers/App";
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

