import React from 'react'
import { useContext } from 'react';
import logo from '../asserts/logo.jpg'
import { CartContext } from '../Store/CartContext.js';
import UserProgressContext from '../Store/UserProgressContext.js';

export default function Header({data}) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <div>
        <header className='main-header'>
            <div className='title'>
             <img src={logo} alt=''/>
             <h1>React Shopping Cart</h1>
            </div>
            <nav>
             <button textonly onClick={handleShowCart}>Cart {totalCartItems}</button>
            </nav>
        </header>
        
    </div>
  )
}
