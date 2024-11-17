import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCartAction } from '../../store/cartReducer';
import s from './AddToCartButton.module.css';

export default function AddToCartButton({ product }) {
    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState(false); // State to track if the button has been clicked


    // Function to handle button click
   
                                     // Function to handle button click
    const handleClick = () => {  
            // Dispatch action to add the product to the cart with a count of 1


        dispatch(addProductToCartAction({ ...product, count: 1 }));
        setIsClicked(true); // Set the state to "clicked" to change the button style
    };

    // Function to handle mouse hover over the button
    const handleMouseEnter = () => {
        if (isClicked) {
            setIsClicked(false); // If the button was clicked, reset the state when the mouse enters the button
        }
    };

    return (
        // Render the button with classes from CSS modules
        <button

            className={`${s.addToCartButton} ${isClicked ? s.clicked : ''}`} // Apply an additional class if the button has been clicked

            onClick={handleClick} // Event handler for click
            onMouseEnter={handleMouseEnter} // Event handler for mouse hover
        >
            Add to cart
        </button>
    );
}
