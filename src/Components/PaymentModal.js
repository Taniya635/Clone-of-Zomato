// PaymentModal.js
import React, { useState } from 'react';
import '../styles/modal.css'; // Import your styles here
import { Link } from 'react-router-dom';

const PaymentModal = ({isOpen, onClose }) => {
    if (!isOpen) return null;

    
  return (
    <div className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-content">
        <h2>Select Payment Option</h2>
        <div className='pay-option'>
        <div className='credit'><button><Link to='/debit'>Debit card</Link></button> </div>  
        <div className='upi'><button>upi</button></div>
        <div className='cod'><button>Cash of delivery</button></div>
        </div>
        {/* Your payment options UI */}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
