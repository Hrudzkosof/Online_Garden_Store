import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, price, discount_price, description, image}) {
  return (
    <div>
        <Link to={`/products/${id}`}>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>{price}</p>
            <p>{discount_price}</p>
            <p>{description}</p>
        </Link>
        
    </div>
  )
}
