import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import LoanList from './components/loan-list';
import LoanList from './components/loan-page';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
      <LoanPage />
  </Provider>,
  document.getElementById('root')
);

