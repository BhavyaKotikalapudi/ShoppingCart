import React from 'react'
import { useContext } from 'react';
import {CartContext}  from '../Store/CartContext';

export default function Card({items}) {
  const cartCtx=useContext(CartContext)

  function handleCart(){
     cartCtx.addItem(items)
  }
  
  return (
       <div className='card' key={items.id}>
              <img src={items.image} alt='' className='Img'/>
                <h1 className="card-title">{items.name}</h1> 
                <p className='card-price'>
                <strong>{items.price} INR</strong>    
                </p>   
                <button className='btn' onClick={handleCart}>Add</button>
        </div>
 
  )
}
