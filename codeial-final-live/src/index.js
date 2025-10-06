import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { configureStore } from './store';
import {Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();

console.log('store', store.getState());

root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
