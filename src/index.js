/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ToggleColorMode from './utils/ToggleColorMode';
import App from './components/App';
import store from './app/store';
import './index.css';

require('dotenv').config({
  path: '../.env',
});

ReactDOM.render(
  <Provider store={store}>
    <ToggleColorMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorMode>
  </Provider>,
  document.getElementById('root'),
);
