import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import s from './NavMenu.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { Context } from '../../context';

export default function NavMenu() {

  const { closeMenu, menuActive } = useContext(Context); // Accessing closeMenu function and menuActive state from Context 

  return (
    <nav className={[s.nav_menu, menuActive ? s.active : ''].join(' ')} > {/* Navigation menu with conditional active class*/}
        <Link to='/'> Main Page </Link> {/* Link to the main page  */}
        <Link to='/categories'> Categories </Link> {/*  Link to categories page */}
        <Link to='all_products'> All products </Link> {/* Link to all products page */}
        <Link to='/all_sales'> All sales </Link> {/* Link to all sales page */}
        <IoCloseSharp onClick={closeMenu}/>
        
    </nav>
  )
}
