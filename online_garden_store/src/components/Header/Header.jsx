import React from 'react'
import { Link } from 'react-router-dom'
import basket from '../images/basket.png'
import logo from '../images/logo.png'
import NavMenu from '../NavMenu/NavMenu'
import s from './Header.module.css'

export default function Header() {
  return (
    <div className={s.header}>



         <Link to='/'>
            <img src={logo} alt="LOGO" className={s.logo} />
        </Link>
        <NavMenu />
        <Link to='/cart'>
            <img src={basket} alt="Basket" className={s.basket} />
        </Link>
    </div>
  )
}
