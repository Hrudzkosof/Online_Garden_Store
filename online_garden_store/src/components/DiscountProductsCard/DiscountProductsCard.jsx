import { domain } from '../../domain';
import React from 'react'; // Import React library
import { Link } from 'react-router-dom'; // Import Link component for routing
import s from './index.module.css'; // Import CSS module styles

import AddToCartButton from '../AddToCartButton/AddToCartButton'; // Import Add to Cart button

export default function DiscountProductsCard({ id, title, price, discont_price, image }) {

    const discountPercentage = Math.round(((price - discont_price) / price) * 100); // Calculate discount percentage
    const product = {id, title, price, discont_price, image }; // Create product object for cart

  return (
    <div className={s.discountProductsCards}>  {/*Main card container*/}
        <div className={s.cards}>  {/*Individual card wrapper*/}
          <Link to={`/products/${id}`}>  {/*Link to individual product page*/}
            <img className={s.discountProductImg} src={`${domain}${image}`} alt={title}/>  {/*Product image*/}
            <p className={s.discountProductTitle}>{title}</p>  {/*Product title*/}
            <p className={s.discounProductDisPrice}>${discont_price}<span className={s.discountProductPrice}>${price}</span></p>  {/*Product prices*/}
            <p className={s.discountProductDisPercentage}>{discountPercentage} %</p>  {/*Discount percentage*/}
          </Link>
          <AddToCartButton product={product} /> {/*Add to cart button*/}
        </div>
    </div>
  )
}
