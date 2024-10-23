import React from 'react'
import s from './AllProductCard.module.css'
import { Link } from 'react-router-dom'

export default function AllProductCard({id, image, title, price, discont_price}) {
  return (
    <div className={s.all_products}>
      <Link to={`/products/${id}`}>
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
        </Link>
    </div>
  )
}