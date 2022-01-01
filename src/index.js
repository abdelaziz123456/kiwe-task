import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import reducer from './reducers/index' 
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store1=createStore(reducer)
ReactDOM.render(
  <Provider store={store1}>
    <App />
  </Provider>,
  document.getElementById('root')
);

