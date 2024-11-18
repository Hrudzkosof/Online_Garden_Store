import { domain } from '../../domain';
import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementCountAction, deleteProductFromCartAction, incrementCountAction } from '../../store/cartReducer';
import { IoMdClose } from "react-icons/io";
import s from './CartItem.module.css';

export default function CartItem({ id, title, image, price, discont_price, count }) {
  const dispatch = useDispatch(); // Using Redux dispatch to trigger actions
  
  // Calculate total price based on discount or regular price
  const totalPrice = discont_price ? discont_price * count : price * count;  
  // Original price without discount
  const originalPrice = price * count;


  // Function to increase product count
  const handleIncrement = () => {
    dispatch(incrementCountAction(id)); 
  };

   // Function to decrease product count or remove product if count is 1
  const handleDecrement = () => {
    if (count > 1) {
      dispatch(decrementCountAction(id)); // Decreases count by dispatching action
    } else {
      dispatch(deleteProductFromCartAction(id)); // Removes product from cart if count is 1
    }
  };

  return (
    <div className={s.card}>
      <div>
        <img src={`${domain}${image}`} alt={title} />
      </div>

      <div className={s.details}>
        <p className={s.title}>{title}</p>
        
        <div className={s.quantityPrice}>
          <div className={s.quantityControls}> {/* Quantity control buttons */}
            <div onClick={handleDecrement}>-</div> {/* Decrease quantity button */}
            <p>{count}</p> {/* Displays current quantity */}
            <div onClick={handleIncrement}>+</div> {/* Increase quantity button*/}
          </div>

          {/* Displays the total price for this item */}
          <p className={s.price}>${totalPrice.toFixed(0)}</p>

         {/* Shows original price if there’s a discount*/}
          {discont_price && <span className={s.originalPrice}>${originalPrice.toFixed(0)}</span>}
        </div>
      </div>

     {/* Close icon to remove item from cart */}
      <IoMdClose onClick={() => dispatch(deleteProductFromCartAction(id))} />
    </div>
  );
}