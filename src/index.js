import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider, CartProvider } from './context';
import './index.css';
import App from './App';

import { ScrollToTop } from './components';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider >
        <FilterProvider >
          <ScrollToTop/>
          <ToastContainer closeButton={false} autoClose={2000} closeOnClick={true} position='top-center'/>
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
