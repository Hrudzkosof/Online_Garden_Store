import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SalesProductsContainer from '../../components/SalesProductsContainer/SalesProductsContainer';
import { getAllProducts } from '../../requests/salesProducts';
import { getCategories } from '../../requests/categories_req'
import s from './MainPage.module.css';
import AmazingDiscount from '../../components/AmazingDiscount/AmazingDiscount';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import CategoriesContainer from '../../components/CategoryContainer/CategoriesContainer'; 
import Footer from '../../components/Footer/Footer';

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts(dispatch);
    dispatch(getCategories());
  }, [dispatch]);

  const saleProducts = useSelector(state => state.salesProducts.discountedProducts);
  const categories = useSelector(state => state.categories); 

  return (
    <div className={s.main_page}>
      <AmazingDiscount />

      <div className={s.headerContainer}>
    <span className={s.title}>Categories</span>
    <div className={s.line}></div> 
    <Link to='/categories' className={s.rectangleText}>All Categories</Link>
      </div>

      <CategoriesContainer categories={categories} limit={4} /> 

      <DiscountForm />

      <div className={s.sales_block}>
        <span className={s.sale_text}>Sale</span>
        <div className={s.separator}></div>
        <Link to='/all_sales' className={s.all_sales_link}>All sales</Link>
      </div>

      <SalesProductsContainer saleProducts={saleProducts} />
      <Footer />
    </div>
  );
}