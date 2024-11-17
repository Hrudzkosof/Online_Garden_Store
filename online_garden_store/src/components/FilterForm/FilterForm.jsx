import React, { useEffect, useState } from 'react';
import s from './FilterForm.module.css'
import { filterProductsAction, getDiscountProductsAction, sortProductsAction } from '../../store/allProductsReducer';
import { useDispatch } from 'react-redux';

export default function FilterForm({ hideSection }) {

    const dispatch = useDispatch();


    // Sorting
    const sort = e => dispatch(sortProductsAction(e.target.value));
    
    // Checkbox
    const [ isChecked, setIsChecked ] = useState(false);
    const handleCheck = () => setIsChecked(!isChecked);
    const handleClick = (e) =>{ 
        console.log('handleClick', e.target.checked); 
        dispatch(getDiscountProductsAction(e.target.checked));
    }

    // Filtration
    const [ minValue, setMinValue ] = useState(0);
    const [ maxValue, setMaxValue ] = useState(Infinity);

    const handleMinValue = e => setMinValue(e.target.value || 0);

    const handleMaxValue = e => setMaxValue(e.target.value || Infinity);

    useEffect(() => {
        dispatch(filterProductsAction({ min: minValue, max: maxValue}))
      }, [minValue, maxValue, dispatch])
    
  return (
    <form className={s.filter_form}>
    
    <div className={s.first_row}>
        <div>
            <label className={s.label}>Price</label>
            <input type="text" placeholder="from" name="price_from" onChange={handleMinValue} />
            <input type="text" placeholder="to" name="price_to" onChange={handleMaxValue} />
        </div>

        {hideSection !== 'discountedItems' && (
            <div className={s.checkbox_container}>
                <label className={s.label_check}>Discounted items
                <input type="checkbox" checked={isChecked} onChange={handleCheck} onClick={handleClick} />
                <span className={s.checkmark}></span></label>
            </div>
        )}
    </div>

    
    <div>
        <label className={s.label}>Sorted</label>
        <select onInput={sort} className={s.sort} name="sort">
            <option value="default">by default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="nameAsc">Name: A to Z</option>
            <option value="nameDesc">Name: Z to A</option>
        </select>
    </div>
</form>
  )
}
