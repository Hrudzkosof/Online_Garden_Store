import React, { useState } from 'react';
import s from './FilterForm.module.css'

export default function FilterForm() {

    const ProductFilter = () => {

        const [products, setProducts] = useState([])
        const [priceFrom, setPriceFrom] = useState('')
        const [priceTo, setPriceTo] = useState('')
        const [discounted, setDiscounted] = useState(false)
        const [sortBy, setSortBy] = useState('');
    }

    const handleFilter = e => {
        e.preventDefault();
    
        const { price_from, price_to } = e.target;

        const getDiscount = {
            from: price_from.value,
            to: price_to.value,
        }

        e.target.reset();
    }

  return (
    <form onSubmit={handleFilter} className={s.filter_form}>
        <div>
            <label className={s.label}>Price</label>
            <input type="text" placeholder='from' name='price_from' />
        </div>

        <div>
            <input type="text" placeholder='to' name='price_to' />
        </div>

        <div>
            <label className={s.checkbox_container}><span className={s.label}>Discounted items</span>
                <input type="checkbox" />
                <span className={s.checkmark}></span>
            </label>   
        </div> 

        <div>
            <label className={s.label}>Sorted</label>
            <select className={s.sort} name="sort">
            <option value="default">by default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            </select>
        </div>
        
    </form>
  )
}
