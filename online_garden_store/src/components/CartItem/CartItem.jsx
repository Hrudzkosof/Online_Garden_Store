import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementCountAction, deleteProductFromCartAction, incrementCountAction } from '../../store/cartReducer';
import { IoMdClose } from "react-icons/io";
import s from './CartItem.module.css';

export default function CartItem({ id, title, image, price, discont_price, count }) {
  const dispatch = useDispatch();

  return (
    <div className={s.card}>

      <div className={s.imageContainer}>
        <img src={`http://localhost:3333${image}`} alt={title} />
      </div>

      <div className={s.details}>
        <p className={s.title}>{title}</p>
        
        <div className={s.quantityPrice}>
          <div className={s.quantityControls}>
            <div onClick={() => dispatch(decrementCountAction(id))}>-</div>
            <p>{count}</p>
            <div onClick={() => dispatch(incrementCountAction(id))}>+</div>
          </div>

          <p className={s.price}>${discont_price || price}</p>
          {discont_price && <span className={s.originalPrice}>${price}</span>}
        </div>
      </div>

      <IoMdClose className={s.closeIcon} onClick={() => dispatch(deleteProductFromCartAction(id))} />
    </div>
  );
}