import React, { useContext } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import s from './SecondModalWindow.module.css'
import { Context } from '../../context';

export default function SecondModalWindow() {

    const { closeSecondModalWindow, secondModalActive } = useContext(Context); // Accessing close function and modal state from Context

    // Inline styles to conditionally display the modal
    const modalStyles = {
        display: secondModalActive ? 'flex' : 'none'
    };

  return (
    <div className={s.sec_modal} style={modalStyles}> {/* Main modal container with conditional styles */}
        <div>
            <IoCloseOutline onClick={closeSecondModalWindow}/> {/* Close icon triggers close function on click */}
            <p>Congratulations!</p>
            <p>Item added to cart!</p>
        </div>
    </div>
  )
}
