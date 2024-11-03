import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCartAction } from '../../store/cartReducer';
import s from './AddToCartButton.module.css';

export default function AddToCartButton({ product }) {
    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        dispatch(addProductToCartAction({ ...product, count: 1 }));
        setIsClicked(true);
    };

    const handleMouseEnter = () => {
        if (isClicked) {
            setIsClicked(false); 
        }
    };

    return (
        <button
            className={`${s.addToCartButton} ${isClicked ? s.clicked : ''}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        >
            Add to cart
        </button>
    );
}