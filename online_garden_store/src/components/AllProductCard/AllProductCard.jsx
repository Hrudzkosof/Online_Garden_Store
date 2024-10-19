import React from 'react'
import s from './AllProductCard.module.css'

export default function AllProductCard({image, title, price, discont_price}) {

  const discountPercent = discont_price ? Math.round(((price - discont_price) / price) * 100) : null;

  return (
    <div className={s.products_card}>
      {discountPercent && (
        <div className={s.discount_label}>
          -{discountPercent}%
        </div>
      )}

      <img src={`http://localhost:3333${image}`} alt={title} />

      <div>
        <p className={s.card_title}>{title}</p>

        <div className={s.prices}>
          {discont_price ? (
            <>
              <span className={s.discont_price}>${discont_price}</span>
              <span className={s.old_price}>${price}</span> 
            </>
          ) : (
            <span className={s.regular_price}>${price}</span>
          )}
        </div>
      </div>
    </div>
  );
};
