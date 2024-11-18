import { domain } from '../../domain';
import React from 'react'
import s from './SalesProductCard.module.css'
import { Link } from 'react-router-dom';

export default function SalesProductCard({id, title, price, discont_price, image}) {

  // Calculating discount percentage based on price and discount price
  const discountPercent = Math.round(((price - discont_price) / price) * 100);

  return (
    
    <div className={s.sales_card}>
        <div className={s.discount_label}> 
          -{discountPercent}%  {/* Displaying the discount label */}
        </div>
      
      {/* Link to the product detail page / Ссылка на страницу с деталями продукта */}
      <Link to={`/products/${id}`}>
      <img src={`${domain}${image}`} alt={title} />
      </Link>

      <div>
        <p>{title}</p>
        <div> 
          <span>${discont_price}</span> {/* Displaying the discount price */}
          <span>${price}</span> {/* Displaying the original price */}
        </div>
      </div>
      
     
  </div>
  
  )
}
