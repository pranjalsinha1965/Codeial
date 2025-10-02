import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import './index.css';
// import App from './components/App';
import { configureStore } from './store';

const store = configureStore();
// console.log('store', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
