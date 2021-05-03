import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
