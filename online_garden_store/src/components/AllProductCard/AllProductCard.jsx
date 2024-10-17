import React from 'react'
import s from './AllProductCard.module.css'

export default function AllProductCard({image, title, price, discont_price}) {
  return (
    <div className={s.all_products}>
       <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p className={s.card_title}>{title}</p>
        <div className={s.prices}>
          {discont_price ? (
            <span>${discont_price}</span>
          ) : (
            <span>No discount</span>
          )}
          <span>${price}</span>
        </div>
        </div>
    </div>
  )
}
