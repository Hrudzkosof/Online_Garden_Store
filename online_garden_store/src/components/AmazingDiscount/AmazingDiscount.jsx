import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DiscountProducts from '../DiscountProducts/DiscountProducts'
import s from './index.module.css'


export default function AmazingDiscount() {
  const [showDiscountProducts, setShowDiscountProducts] = useState(false)

  const handleClick = () => {
    setShowDiscountProducts(true) 
  }
  return (
    <div className={s.banner}>
      {!showDiscountProducts ? (
        <div className={s.amazingDiscountImg}>
          <div className={s.leer}></div>
          <div className={s.discountText}>
            <h1 className={s.amazingDiscountH}>Amazing Discounts on Garden Products!</h1>
            <Link to="/all_sales" className={s.amazingDiscountButton}>Check out</Link>
          </div>
        </div>
      ) : (
        <DiscountProducts /> 
      )}
    </div>
 )    
}