import React, { useEffect, useState } from 'react'
import DiscountProductsCard from '../DiscountProductsCard/DiscountProductsCard'
import s from './index.module.css'
export default function DiscountProducts() {
    const [products, setProducts] = useState([])
  


    useEffect(() => {
        fetch('http://localhost:3333/products/all')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.error(err))
    }, [])
    
    const discountProducts = products.filter(product => product.discont_price > 0)

  return (
    <div>
      <h1>Discounted items</h1>
        <div className={s.discountProductsContainer}>
        {discountProducts.map((product) => (
          <div key={product.id} >
            <DiscountProductsCard
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
