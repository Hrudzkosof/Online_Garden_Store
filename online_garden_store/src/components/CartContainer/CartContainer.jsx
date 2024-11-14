import React from 'react'
import CartItem from '../CartItem/CartItem'
import s from './CartContainer.module.css';

export default function CartContainer({ cartState }) {
  return (
    <div  className={s.cartContainer}>
      {
        cartState.map(el => <CartItem key={el.id} {...el}/>) // Mapping each item in cartState to a CartItem component
      }
    </div>
  )
}
