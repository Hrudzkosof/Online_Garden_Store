import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllProductsContainer from '../../components/AllProductsContainer/AllProductsContainer';
import { showAllProducts } from '../../requests/products';
import FilterForm from '../../components/FilterForm/FilterForm';
import s from './AllProductsPage.module.css'
import Footer from '../../components/Footer/Footer';


export default function AllProductsPage() {

  

  const allProductsState = useSelector(store => store.allProducts); // Accessing the allProducts state from Redux store

  const dispatch = useDispatch(); // Setting up dispatch to send actions to Redux store

    useEffect(() => {
      showAllProducts(dispatch);  // Fetching all products when the component mounts
  }, [dispatch]);  // Dependency array ensures useEffect runs only on initial render

  console.log(allProductsState) // Logging the products state to check fetched data


  return (
    <div className={s.title} >
      <h1>All Products</h1> {/* Page title */}
      <FilterForm/> {/* Render filter form for products */}
      <AllProductsContainer allProducts = {allProductsState }/> {/* Display all products in container */}
      <Footer/> {/* Footer component at the bottom */}
    </div>
  )
}
