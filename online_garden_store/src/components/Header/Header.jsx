import React, { useContext } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Context } from '../../context'
import basket from '../images/basket.png'
import logo from '../images/logo.png'
import NavMenu from '../NavMenu/NavMenu'
import s from './Header.module.css'


export default function Header() {

  const { openMenu } = useContext(Context)

  const cartState = useSelector(store => store.cart);
  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);

  return (
    <div className={s.header}>
      <div className='wrapper'>
          <Link to='/'>
              <img src={logo} alt="LOGO" className={s.logo} />
          </Link>
          <NavMenu />
          <div className={s.media_menu}>
            <Link to='/cart'>
                <img src={basket} alt="Basket" className={s.basket} />
              {
                cartState.length === 0
                ? ''
                : <span>{ totalCount }</span>
              }
            </Link>
            <RxHamburgerMenu onClick={openMenu}/>
          </div>
        </div>
    </div>
  )
}
