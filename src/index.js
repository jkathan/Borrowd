import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import ItemList from './components/Item-list';
import AddItemForm from './add-item-form';

import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
      <AddItemForm />
  </Provider>,
  document.getElementById('root')
);

