import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CategoriesContainer from '../../components/CategoryContainer/CategoriesContainer';
import { getCategories } from '../../requests/categories_req';  
import Footer from '../../components/Footer/Footer';

export default function CategoriesPage() {
  const categories = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  const location = useLocation();

  
  const showAll = new URLSearchParams(location.search).get('showAll') === 'true';

  useEffect(() => {
    dispatch(getCategories);
  }, [dispatch]);

  return (
    <div>
      <CategoriesContainer categories={categories} initialShowAll={showAll} />
      <Footer />
    </div>
  );
}