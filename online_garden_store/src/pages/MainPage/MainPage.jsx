import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AmazingDiscount from '../../components/AmazingDiscount/AmazingDiscount';
import CategoriesContainer from '../../components/CategoryContainer/CategoriesContainer';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import Footer from '../../components/Footer/Footer';
import SalesProductsContainer from '../../components/SalesProductsContainer/SalesProductsContainer';
import { getCategories } from '../../requests/categories_req';
import { getSaleProducts } from '../../requests/salesProducts';
import s from './MainPage.module.css';

export default function MainPage() {
  const dispatch = useDispatch(); // Setting up dispatch to trigger actions in Redux store 

  const [saleProducts, setSaleProducts] = useState([]) // State to hold sale products

  useEffect(() => {
    // Fetch sale products and update state, then fetch categories
    getSaleProducts(dispatch).then(products => setSaleProducts(products));
    dispatch(getCategories());                                  // Dispatch action to fetch categories
  }, [dispatch]); // Dependency array ensures useEffect runs on initial render

  const categories = useSelector(state => state.categories);  // Accessing categories from Redux store  // Get categories from Redux store

  return (
    <div className={s.main_page}>
      <AmazingDiscount />

      <div className={s.headerContainer}>                      {/* Header section for categories with a link to view all categories */}
        <span className={s.title}>Categories</span>
        <div className={s.separator}></div>
        <Link to='/categories' className={s.rectangleText}>
          All Categories
        </Link>
      </div>

      <CategoriesContainer categories={categories} limit={4} /> {/* Display categories using the CategoriesContainer component, limit to 4 */}
      <Link to='/categories' className={s.categories_media_360}>
          All Categories
        </Link>

      <DiscountForm />

      <div className={s.sales_block}>
        <span className={s.sale_text}>Sale</span> {/* Sale title  */}
        <div className={s.separator}></div> {/* Separator for visual division */}
        <Link to='/all_sales' className={[s.all_sales_link, s.rectangleText ].join(' ')}>All sales</Link>  {/* Link to all sales page  */}
      </div>

      <SalesProductsContainer saleProducts={saleProducts} /> {/* Displays sale products in container*/}
      <Link to='/all_sales' className={s.sale_madia_360}>All sales</Link>
      <Footer />
    </div>
  );
}