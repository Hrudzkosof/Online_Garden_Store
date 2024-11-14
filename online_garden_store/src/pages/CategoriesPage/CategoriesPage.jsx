import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesContainer from '../../components/CategoryContainer/CategoriesContainer';
import Footer from '../../components/Footer/Footer';
import { getCategories } from '../../requests/categories_req';
import s from './CategoriesPage.module.css';

export default function CategoriesPage() {
  const categories = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <div className="categoriesHeader">
        <h1>Categories</h1> 
      </div>
      <CategoriesContainer categories={categories} />
      <Footer />
    </div>
  );
}