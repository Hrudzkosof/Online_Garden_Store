import React from 'react'
import CartContainer from '../../components/CartContainer/CartContainer'
import { useSelector } from 'react-redux'
import s from './CartPage.module.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'


export default function CartPage() {

  const cartState = useSelector(store => store.cart)
  console.log(cartState)

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);
  const totalSum = cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2)

  return (
    <div>
        <div className={s.cart_page}>
        
          <div>
            <h2>Shopping cart</h2>
            <div className={s.separator}></div>
            <Link to='/categories' className={s.back_to_categories}>Back to the store</Link>
          </div>

        {
          cartState.length === 0
          ? <p>Looks like you have no items in your basket currently.</p>
          : <div>
            <CartContainer cartState={cartState}/>

            <h3>Order details</h3>
            <p>{totalCount} items</p>
            <p>Total ${totalSum}</p>
          </div>
        }
        <Link to='/categories'>
          <button>Continue Shopping</button>
        </Link>
        
        </div>
        <Footer/>
      </div>
  )
}
