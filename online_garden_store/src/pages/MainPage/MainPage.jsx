import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SalesProductsContainer from '../../components/SalesProductsContainer/SalesProductsContainer';
import { getSaleProducts } from '../../requests/salesProducts'; 
import { getCategories} from '../../requests/categories_req'
import s from './MainPage.module.css';
import AmazingDiscount from '../../components/AmazingDiscount/AmazingDiscount';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import CategoriesContainer from '../../components/CategoryContainer/CategoriesContainer'; 
import Footer from '../../components/Footer/Footer';

export default function MainPage() {
  const dispatch = useDispatch(); // Setting up dispatch to trigger actions in Redux store 

  const [saleProducts, setSaleProducts] = useState([]) // State to hold sale products

  useEffect(() => {
    // Fetch sale products and update state, then fetch categories
    getSaleProducts(dispatch).then(products => setSaleProducts(products));
    dispatch(getCategories());
  }, [dispatch]); // Dependency array ensures useEffect runs on initial render

  const categories = useSelector(state => state.categories);  // Accessing categories from Redux store

  return (
    <div className={s.main_page}>
      <AmazingDiscount />

      <div className={s.headerContainer}>
        <span className={s.title}>Categories</span>
        <div className={s.separator}></div>
        <Link to='/categories' className={s.rectangleText}>
          All Categories
        </Link>
      </div>

      <CategoriesContainer categories={categories} limit={4} /> 

      <DiscountForm />

      <div className={s.sales_block}>
        <span className={s.sale_text}>Sale</span> {/* Sale title  */}
        <div className={s.separator}></div> {/* Separator for visual division */}
        <Link to='/all_sales' className={s.all_sales_link}>All sales</Link>  {/* Link to all sales page  */}
      </div>

      <SalesProductsContainer saleProducts={saleProducts} /> {/* Displays sale products in container*/}
      <Footer />
    </div>
  );
}