import React from 'react';
import './App.css';
import './assets/styles/styles.css';
import './assets/styles/admin.css';
import { CartProvider } from './context/CartContext';
import AppRoutes from './routes/AppRoutes';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
