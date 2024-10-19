import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import AllCategoriesPage from './components/pages/AllCategoriesPage';
import CategoryDetailsPage from './components/pages/CategoryDetailsPage'; 
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage/AllSalesPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';



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


    </Routes>
    

    </div>
  );
};

export default App;
