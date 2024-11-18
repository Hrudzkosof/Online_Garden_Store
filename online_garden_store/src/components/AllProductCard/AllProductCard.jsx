import { domain } from '../../domain';
import React from 'react';
import s from './AllProductCard.module.css';
import { Link } from 'react-router-dom';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

export default function AllProductCard({ id, image, title, price, discont_price }) {


 // Calculating discount percentage if discount price exists 
  const discountPercent = discont_price ? Math.round(((price - discont_price) / price) * 100) : null;

  return (
    <div className={s.cards_container}>
    <div className={s.products_card}>
      {discountPercent && ( // Show discount label if there is a discount 
        <div className={s.discount_label}>
          -{discountPercent}%
        </div>
      )}

      {/*Link to navigate to product's detailed page */}
      <Link to={`/products/${id}`}>
        <img src={`${domain}${image}`} alt={title} />
        <div>
          <p className={s.card_title}>{title}</p>
          <div className={s.prices}>
            {discont_price ? ( // If there's a discount price, show discounted and old price
              <>
                <span className={s.discont_price}>${discont_price}</span> {/* Discount price */}
                <span className={s.old_price}>${price}</span> {/* Old price, crossed out */}
              </>
            ) : (
              <span className={s.price}>${price}</span> 
            )}
          </div>
        </div>
      </Link>
        {/* Button to add product to cart */}
      <AddToCartButton product={{ id, image, title, price, discont_price }} />
    </div>
    </div>
  );
}