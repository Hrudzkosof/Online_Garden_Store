import React, { useEffect, useState } from 'react';
import DiscountProductsCard from '../DiscountProductsCard/DiscountProductsCard';
import s from './index.module.css';
import FilterForm from '../FilterForm/FilterForm';
import { useDispatch, useSelector } from 'react-redux';
import { getSaleProducts } from '../../requests/salesProducts';

export default function DiscountProducts({}) {
  const dispatch = useDispatch();

  useEffect(() => {
    getSaleProducts(dispatch);
  }, [dispatch]);

  const salesProducts = useSelector(state => state.salesProducts);
  console.log('discountedProd', salesProducts)

  return (
    <div>
      <h1>Discounted items</h1>

      <FilterForm hideSection='discountedItems'/>
     
      <div className={s.discountProductsContainer}>
        {salesProducts
        .filter(product => product.visible)
        .map((product) => (
          
          <div key={product.id} >
            <DiscountProductsCard
              id={product.id}
              title={product.title}
              price={product.price}
              discont_price={product.discont_price}
              image={product.image}
            />
            
          </div>
        ))}
      </div>
    
        
    </div>
  )
}
