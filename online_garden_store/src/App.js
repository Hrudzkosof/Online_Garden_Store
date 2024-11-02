import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AllCategoriesPage from './components/pages/AllCategoriesPage';
import CategoryDetailsPage from './components/pages/CategoryDetailsPage';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage/AllSalesPage';
import CartPage from './pages/CartPage/CartPage';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';



function App() {
  return (
  

<div>
    <Header/>

    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path="/categories" element={<AllCategoriesPage />} />
      <Route path='/all_products' element={<AllProductsPage/>} />
      <Route path='/all_sales' element={<AllSalesPage/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
      <Route path="/categories/:id" element={<CategoryDetailsPage />} /> 
      <Route path='products/:product_id' element={<SingleProductPage />}/>


    </Routes>
    

    </div>
  );
};

export default App;
