import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

import AddToCartButton from '../AddToCartButton/AddToCartButton'

export default function DiscountProductsCard({ id, title, price, discont_price, image}) {

    const discountPercentage = Math.round(((price - discont_price) / price) * 100)
    const product = { title, price, discont_price, image }

  return (
    <div className={s.discountProductsCards}>
        <div className={s.cards}>
          <Link to={`/products/${id}`}>
            <img className={s.discountProductImg} src={`http://localhost:3333${image}`} alt={title}/>       
            <p className={s.discountProductTitle}>{title}</p>
            <p className={s.discounProductDisPrice}>${discont_price}<span className={s.discountProductPrice}>${price}</span></p>
            <p className={s.discountProductDisPercentage}>{discountPercentage} %</p>
            <AddToCartButton product={product} />
          </Link>
        </div>
    </div>
  )
}