import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCountAction, deleteProductFromCartAction, incrementCountAction } from '../../store/cartReducer';
import { IoMdClose } from "react-icons/io";
import s from './CartItem.module.css';

export default function CartItem({ id, title, image, price, discont_price, count }) {
  const dispatch = useDispatch();
  


  const totalPrice = discont_price ? discont_price * count : price * count;  
  const originalPrice = price * count;

 
  const handleIncrement = () => {
    dispatch(incrementCountAction(id)); 
  };
  const handleDecrement = () => {
    if (count > 1) {
      dispatch(decrementCountAction(id)); 
    } else {
      dispatch(deleteProductFromCartAction(id)); 
    }
  };

  return (
    <div className={s.card}>
      <div>
        <img src={`http://localhost:3333${image}`} alt={title} />
      </div>

      <div className={s.details}>
        <p className={s.title}>{title}</p>
        
        <div className={s.quantityPrice}>
          <div className={s.quantityControls}>
            <div onClick={handleDecrement}>-</div>
            <p>{count}</p>
            <div onClick={handleIncrement}>+</div>
          </div>

      
          <p className={s.price}>${totalPrice.toFixed(2)}</p>

         
          {discont_price && <span className={s.originalPrice}>${originalPrice.toFixed(2)}</span>}
        </div>
      </div>

     
      <IoMdClose onClick={() => dispatch(deleteProductFromCartAction(id))} />
    </div>
  );
}