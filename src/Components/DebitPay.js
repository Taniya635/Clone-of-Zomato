import React, { useState } from 'react';
import '../styles/debit.css'
import { useNavigate } from 'react-router-dom';
import Pop from './Pop';

function DebitPay() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name,setName]=useState('')
  const navigate=useNavigate()

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentInfo = {
      cardNumber,
      expiryDate,
      cvv,
      name
    };
    // For a real implementation, you would handle payment processing and API calls here
    if(cardNumber=="" && expiryDate=="" && cvv==""){
        alert("Fill the required details")
    }else{
      openPopup();
      clearCart();
        // alert("Payment successfull")
        // navigate("/")
    }
    console.log(paymentInfo);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
  };

  return (
    <div className="payment-page">
      <h1>Debit Card Payment</h1>
      <form className="payment-form" onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            required
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength="3"
            required
          />
        </label>
        <label>
          Cardholder name(optional):
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            maxLength="3"
          />
        </label>
        <button type="submit" >Submit Payment</button>
        {showPopup && (
        <Pop onClose={closePopup} />
        
      )}
      </form>
    </div>
  );
}

export default DebitPay;
