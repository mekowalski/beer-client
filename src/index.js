import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store.js';

console.log(store)

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
