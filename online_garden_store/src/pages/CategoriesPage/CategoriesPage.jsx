import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesContainer from '../../components/CategoryContainer/CategoriesContainer';
import { getCategories } from '../../requests/categories_req';  

export default function CategoriesPage() {
  const categories = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories);
  }, [dispatch]);

  return (
    <div>
      <CategoriesContainer categories={categories} />
    </div>
  );
}