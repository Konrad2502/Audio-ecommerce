import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DataProvider} from './context/DataContext';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DataProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);


