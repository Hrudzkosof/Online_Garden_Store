import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllProductsContainer from '../../components/AllProductsContainer/AllProductsContainer';
import { showAllProducts } from '../../requests/products';
import s from './AllProductsPage.module.css'

export default function AllProductsPage() {


  const allProductsState = useSelector(store => store.allProducts);

    const dispatch = useDispatch();

    useEffect(() => {
      showAllProducts(dispatch);
  }, [dispatch]);




  return (
    <div className={s.title} >
      <h1>All Products</h1>
      <AllProductsContainer allProducts = {allProductsState }/>
    </div>
  )
}
