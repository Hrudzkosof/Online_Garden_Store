import React from 'react'
import AllProductCard from '../AllProductCard/AllProductCard'
import s from './AllProductsContainer.module.css'

export default function AllProductsContainer({allProducts}) {
   
  return (
    <div className={s.products_container}>
        {
            allProducts.map( el => <AllProductCard key={el.id} {...el}/>)
        }
    </div>
  )
}
