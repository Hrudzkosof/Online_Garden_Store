import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSaleProducts } from '../../requests/salesProducts';
import DiscountProductsCard from '../DiscountProductsCard/DiscountProductsCard';
import FilterForm from '../FilterForm/FilterForm';
import s from './index.module.css';

export default function DiscountProducts({}) {
  const dispatch = useDispatch(); // Dispatch hook for actions

  useEffect(() => {
    getSaleProducts(dispatch); // Fetch sale products on mount
  }, [dispatch]); // Re-run on dispatch change

  const salesProducts = useSelector(state => state.salesProducts); // Select products from store
  console.log('discountedProd', salesProducts) // Log products for debugging

  return (
    <div>
      <h1 className={s.discount_title}>Discounted items</h1>  {/* Title for section */}

      <FilterForm hideSection='discountedItems'/> {/* Filter form for discounts */}
     
      <div className={s.discountProductsContainer}> {/* Container for product cards */}
        {salesProducts
        .filter(product => product.visible)
        .map((product) => (  // Loop over products
          
          <div key={product.id} >  {/* Unique key for each product */}
            <DiscountProductsCard
              id={product.id}  // Pass product id
              title={product.title}  // Pass product title
              price={product.price}  // Pass product price
              discont_price={product.discont_price}  // Pass discount price
              image={product.image}  // Pass product image
            />
          </div>
        ))}
      </div>
    
    </div>
  )
}
