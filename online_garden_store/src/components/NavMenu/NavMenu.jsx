import React from 'react'
import { Link } from 'react-router-dom'
import s from './NavMenu.module.css'

export default function NavMenu() {
 
  return (
    <nav className={s.nav_menu}>
        <Link to='/'> Main Page </Link>
        <Link to='/categories?showAll=true'> Categories </Link>
        <Link to='all_products'> All products </Link>
        <Link to='/all_sales'> All sales </Link>
          
    </nav>
  )
}
