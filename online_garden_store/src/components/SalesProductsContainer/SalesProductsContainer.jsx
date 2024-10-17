import React from 'react'
import SalesProductCard from '../SalesProductCard/SalesProductCard'
import s from './SalesProductsContainer.module.css'


export default function SalesProductsContainer( { saleProducts} ) {

   
  return (
    <div className={s.sales_container}>
          {saleProducts.length > 0 ? (
        saleProducts.map(el => (
          <SalesProductCard
           key={el.id} 
           {...el}
          />
        ))
      ) : (
        <p>No products available with a discount.</p>
      )}
    </div>
  )
}
