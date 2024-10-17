import React from 'react'
import AllProductCard from '../AllProductCard/AllProductCard'

export default function AllProductsContainer({allProducts}) {
    console.log("All Products in Container:", allProducts);
   
  return (
    <div>
        {
            allProducts.map( el => <AllProductCard key={el.id} {...el}/>)
        }
    </div>
  )
}
