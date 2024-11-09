import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import basket from '../images/basket.png'
import logo from '../images/logo.png'
import NavMenu from '../NavMenu/NavMenu'
import s from './Header.module.css'


export default function Header() {

  const cartState = useSelector(store => store.cart);
  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);

  return (
    <div className={s.header}>
      <div className='wrapper'>
          <Link to='/'>
              <img src={logo} alt="LOGO" className={s.logo} />
          </Link>
          <NavMenu />
          <Link to='/cart'>
              <img src={basket} alt="Basket" className={s.basket} />
            {
              cartState.length === 0
              ? ''
              : <span>{ totalCount }</span>
            }
          </Link>
        </div>
    </div>
  )
}
