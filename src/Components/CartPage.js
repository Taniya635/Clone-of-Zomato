import React, { useEffect, useState } from "react";
import { ITEM_IMG_CDN_URL } from "../constants";
import '../styles/cart.css'
import PaymentModal from "./PaymentModal";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const incrementQuantity = (itemToIncrement) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemToIncrement.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decrementQuantity = (itemToDecrement) => {
    if (itemToDecrement.quantity > 1) {
      const updatedCart = cartItems.map(item =>
        item.id === itemToDecrement.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  // const clearCart = () => {
  //   setCartItems([]);
  //   localStorage.removeItem("cart");
  // };


  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price of items in cart
  const totalPrice = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

  return (
    <div className="cart-page" >
      <h2>Your Cart</h2>
      <ul >
        {cartItems.map((item) => (
          <li key={item.id} className="list">
            
            <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                    <p className="item-name">{item.name} </p>
            {/* <p className="item-desc-cart">{item?.description}</p> */}
            
            {/* {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format((item.price*item.quantity )/ 100)} */}
            <p>Rs.{(Math.floor(item.price*item.quantity )/ 100)}.00</p>

            <div><button onClick={() => removeFromCart(item)} className="remove-btn">Remove</button> </div><br/>
            <div><button onClick={() => incrementQuantity(item)} className="incr-btn">+</button></div>
            <p className="qty">Quantity: {item.quantity}</p>
            <div><button onClick={() => decrementQuantity(item)} className="decr-btn">-</button></div>
            
          </li>
        ))}
      </ul>
      <div className="total-cart">
        <h4 >Total cart:</h4>
        <p className="total-label">Total items:{totalItems}</p>
        <p>Delivery Charges: Rs. 00.00</p>
        <p>GST: Rs. 00.00</p>
      <p className="total-value"> Total price: Rs.{Math.floor(totalPrice/100)}.00</p>
      
      <div><button className="button button-primary" onClick={openModal}>Pay</button></div>
     
      </div>
      <PaymentModal isOpen={showModal} onClose={closeModal}/>
    </div>
  );
};

export default CartPage;
