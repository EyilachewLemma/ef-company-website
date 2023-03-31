import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from './stores';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <HelmetProvider>
  <App />
  </HelmetProvider>
    
    </Provider>
);


reportWebVitals();
