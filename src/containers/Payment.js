import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Payment.css';

const Payments = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">Boton de pago con Paypal</div>
      </div>
    </div>
  );
};

export default Payments;
