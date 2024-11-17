import React from 'react'
import SalesProductCard from '../SalesProductCard/SalesProductCard'
import s from './SalesProductsContainer.module.css'


export default function SalesProductsContainer( { saleProducts} ) {

   
  return (
    <div className={s.sales_container}>
          {saleProducts.length > 0 ? (   // Checks if there are products in the saleProducts array
        saleProducts.map(el => ( // Maps each sale product to a SalesProductCard component
          <SalesProductCard
           key={el.id} 
           {...el}
          />
        ))
      ) : (
        <p>No products available with a discount.</p> // Message displayed if there are no sale products
      )}
    </div>
  )
}
