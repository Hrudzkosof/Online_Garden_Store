import React from 'react'
import s from './SalesProductCard.module.css'
import { Link } from 'react-router-dom';

export default function SalesProductCard({id, title, price, discont_price, image}) {

  const discountPercent = Math.round(((price - discont_price) / price) * 100);

  return (
    
    <div className={s.sales_card}>
        <div className={s.discount_label}>
          -{discountPercent}%
        </div>
      <Link to={`/products/${id}`}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      </Link>

      <div>
        <p className={s.card_title}>{title}</p>
        <div className={s.prices}>
          <span>${discont_price}</span>
          <span>${price}</span>
        </div>
      </div>
      
     
  </div>
  
  )
}
