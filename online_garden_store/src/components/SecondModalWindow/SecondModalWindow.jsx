import React, { useContext } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import s from './SecondModalWindow.module.css'
import { Context } from '../../context';

export default function SecondModalWindow() {

    const { closeSecondModalWindow, secondModalActive } = useContext(Context);

    const modalStyles = {
        display: secondModalActive ? 'flex' : 'none'
    };

  return (
    <div className={s.sec_modal} style={modalStyles}>
        <div>
            <IoCloseOutline onClick={closeSecondModalWindow}/>
            <p>Congratulations!</p>
            <p>Item added to cart!</p>
        </div>
    </div>
  )
}
