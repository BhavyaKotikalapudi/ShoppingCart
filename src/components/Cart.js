import { useContext } from 'react';

import React from 'react'
import Modal from './Modal'
import { CartContext } from '../Store/CartContext';
import UserProgressContext from '../Store/UserProgressContext';

export default function Cart() {
  const cartCtx=useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);


  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

      return (
    <Modal className='cart' open={userProgressCtx.progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item)=>{
              return <li key={item.id}>{item.name} - {item.quantity}</li>
            })}
        </ul>
        <p className='cart-total'>INR {cartTotal}</p>
        <p className="modal-actions">
        <button textOnly onClick={handleCloseCart}>
          Close
        </button>
        <button onClick={handleCloseCart}>Go to Checkout</button>
      </p>
    </Modal>
  )
}
