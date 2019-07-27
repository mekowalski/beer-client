import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//not really a function, it is but, it's a wrapper of React component

import App from './containers/App';
import store from './store';

debugger
console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
