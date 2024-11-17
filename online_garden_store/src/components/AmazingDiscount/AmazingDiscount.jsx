import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import DiscountProducts from '../DiscountProducts/DiscountProducts'; 
import s from './index.module.css'; 

export default function AmazingDiscount() {
  const [showDiscountProducts, setShowDiscountProducts] = useState(false) // Manage discount visibility state

  const handleClick = () => {
    setShowDiscountProducts(true)  // Show discount products section
  }

  return (
    <div className={s.banner}>  {/*Main container div*/}
      {!showDiscountProducts ? (  // Conditional rendering check
        <div className={s.amazingDiscountImg}>  {/*Banner image section*/}
          <div className={s.leer}></div>  {/*Empty spacer div*/}
          <div className={s.discountText}>   {/*Discount text container*/}
            <h1 className={s.amazingDiscountH}>Amazing Discounts on Garden Products!</h1>  {/* Discount header text*/}
            <Link to="/all_sales" className={s.amazingDiscountButton}>Check out</Link>  {/*Link to sales page*/}
          </div>
        </div>
      ) : (
        <DiscountProducts />  // Show discount products component
      )}
    </div>
  )    
}
