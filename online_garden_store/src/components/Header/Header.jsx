import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import NavMenu from '../NavMenu/NavMenu'
import s from './Header.module.css'
import basket from '../images/basket.png'
import { useSelector } from 'react-redux'
import { RxHamburgerMenu } from "react-icons/rx";
import { Context } from '../../context'


export default function Header() {

  const { openMenu } = useContext(Context) // Accessing openMenu function from Context

  const cartState = useSelector(store => store.cart); // Getting cart state from Redux store
  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0); // Calculating total items in the cart

  return (
    <div className={s.header}>
      <div className={s.wrapper}> {/* Wrapper for centering and layout*/}
          <Link to='/'> {/* Logo link to homepage */}
              <img src={logo} alt="LOGO" className={s.logo} />
          </Link>
          <NavMenu />
          <div className={s.media_menu}>
            <Link to='/cart'> {/* Link to the cart page */}
                <img src={basket} alt="Basket" className={s.basket} />
              {
                cartState.length === 0
                ? '' // If cart is empty, do not display count 
                : <span>{ totalCount }</span> // Display total count if cart has items 
              }
            </Link>
            <RxHamburgerMenu onClick={openMenu}/> {/* Hamburger menu icon triggers openMenu function*/}
          </div>
        </div>
    </div>
  )
}
