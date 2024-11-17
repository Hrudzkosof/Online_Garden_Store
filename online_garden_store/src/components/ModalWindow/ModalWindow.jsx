import React, { useContext } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import s from './ModalWindow.module.css'
import { Context } from '../../context';

export default function ModalWindow() {

    const { closeModalWindow, modalActive } = useContext(Context);

    const modalStyles = {
        display: modalActive ? 'flex' : 'none'
    }


  return (
    <div className={s.modal} style={modalStyles}>
        <div>
            <IoCloseOutline onClick={closeModalWindow}/>
            <p>Congratulations!</p>
            <p>Your order has been successfully placed on the website. <br/>
            A manager will contact you shortly to confirm your order.</p>
        </div>
    </div>
  )
}
