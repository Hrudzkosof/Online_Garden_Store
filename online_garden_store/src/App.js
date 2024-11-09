import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
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
  const dispatch = useDispatch();

  const [ modalActive, setModalActive ] = useState(false);

  const [ menuActive, setMenuActive ] = useState(false)

  const closeModalWindow = () => {
    dispatch(clearCartAction())
    setModalActive(false)
  }

  const openModalWindow = () => setModalActive (true)

  const [secondModalActive, setSecondModalActive] = useState(false);
  const closeSecondModalWindow = () => setSecondModalActive(false); 
  const openSecondModalWindow = () => setSecondModalActive(true);

  const openMenu = () => setMenuActive(true);
  const closeMenu = () => setMenuActive(false);


return (
<div>
  <Context.Provider value={{ closeModalWindow, openModalWindow, modalActive, openSecondModalWindow, 
    closeSecondModalWindow, secondModalActive, openMenu, closeMenu, menuActive}}>
    <SecondModalWindow/>
    <ModalWindow/>
      <Header/>

    <Breadcrumbs />
        <main className='wrapper'>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/all_products' element={<AllProductsPage/>} />
            <Route path='/all_sales' element={<AllSalesPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='*' element={<NotFoundPage/>} />
            <Route path='/categories/:id' element={<CategoryProductsPage />} />
            <Route path='/products/:product_id' element={<SingleProductPage />}/>
          </Routes>
        </main>
      </Context.Provider>
    
    

    </div>
  );
};

export default App;
