import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllProductsContainer from '../../components/AllProductsContainer/AllProductsContainer';
import { showAllProducts } from '../../requests/products';

import FilterForm from '../../components/FilterForm/FilterForm';

  
import s from './AllProductsPage.module.css'
import Footer from '../../components/Footer/Footer';


export default function AllProductsPage() {


  const allProductsState = useSelector(store => store.allProducts);

    const dispatch = useDispatch();

    useEffect(() => {
      showAllProducts(dispatch);
  }, [dispatch]);




  return (
    <div className={s.title} >
      <h1>All Products</h1>
      <FilterForm/>
      <AllProductsContainer allProducts = {allProductsState }/>
      <Footer/>
    </div>
  )
}
