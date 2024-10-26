import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import SalesProductsContainer from '../../components/SalesProductsContainer/SalesProductsContainer';
import { getAllProducts } from '../../requests/salesProducts';
import s from './MainPage.module.css';

import AmazingDiscount from '../../components/AmazingDiscount/AmazingDiscount';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import Footer from '../../components/Footer/Footer';



export default function MainPage() {

const dispatch = useDispatch();

useEffect(() => {
  getAllProducts(dispatch);
}, [dispatch]);


const saleProducts = useSelector(state => state.salesProducts.discountedProducts);
  return (
    <div className={s.main_page}>

      <AmazingDiscount/>
      
      <Categories/>
      <DiscountForm/>

      <div className={s.sales_block}>
      <span className={s.sale_text}> Sale </span>
      <div className={s.separator}></div>
      <Link to='/all_sales' className={s.all_sales_link}> All sales </Link>
      </div>
     

      <SalesProductsContainer saleProducts={saleProducts}/>
     
      
    </div>
  )
}
