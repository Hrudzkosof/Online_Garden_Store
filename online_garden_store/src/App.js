import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ModalWindow from './components/ModalWindow/ModalWindow';
import SecondModalWindow from './components/SecondModalWindow/SecondModalWindow';
import { Context } from './context';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage/AllSalesPage';
import CartPage from './pages/CartPage/CartPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import CategoryProductsPage from './pages/CategoryProductsPage/CategoryProductsPage';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import { clearCartAction } from './store/cartReducer';



function App() {
  const dispatch = useDispatch(); // Setting up dispatch for Redux actions

  const [ modalActive, setModalActive ] = useState(false); // State for controlling ModalWindow visibility 

  const [ menuActive, setMenuActive ] = useState(false) // State for controlling menu visibility

   // Functions to open and close the main modal
  const closeModalWindow = () => {
    dispatch(clearCartAction()) // Clears the cart when modal is closed
    setModalActive(false)
  }

  const openModalWindow = () => setModalActive (true)

   // State and functions for controlling the secondary modal
  const [secondModalActive, setSecondModalActive] = useState(false);
  const closeSecondModalWindow = () => setSecondModalActive(false); 
  const openSecondModalWindow = () => setSecondModalActive(true);

  // Functions to open and close the menu 
  const openMenu = () => setMenuActive(true);
  const closeMenu = () => setMenuActive(false);


return (
<div>
   {/* Providing global state and functions through Context */}
  <Context.Provider value={{ closeModalWindow, openModalWindow, modalActive, openSecondModalWindow, 
    closeSecondModalWindow, secondModalActive, openMenu, closeMenu, menuActive}}>
    <SecondModalWindow/> {/* Renders secondary modal window */}
    <ModalWindow/> {/* Renders main modal window */}
      <Header/>
        <main className='wrapper'>
          <Routes>
            <Route path='/' element={<MainPage/>}/> {/* Route for MainPage */}
            <Route path='/categories' element={<CategoriesPage />} /> {/*  Route for CategoriesPage */}
            <Route path='/all_products' element={<AllProductsPage/>} /> {/*  Route for AllProductsPage */}
            <Route path='/all_sales' element={<AllSalesPage/>} /> {/* Route for AllSalesPage */}
            <Route path='/cart' element={<CartPage/>} /> {/* Route for CartPage */}
            <Route path='*' element={<NotFoundPage/>} /> {/* Route for NotFoundPage (catch-all) */}
            <Route path='/categories/:id' element={<CategoryProductsPage />} /> {/* Route for CategoryProductsPage */}
            <Route path='/products/:product_id' element={<SingleProductPage />}/> {/* Route for SingleProductPage*/}
          </Routes>
        </main>
      </Context.Provider>
    
    

    </div>
  );
};

export default App;
