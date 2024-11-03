import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage/AllSalesPage';
import CartPage from './pages/CartPage/CartPage';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import CategoryProductsPage from './pages/CategoryProductsPage/CategoryProductsPage'
import ModalWindow from './components/ModalWindow/ModalWindow';
import { Context } from './context';
import { useDispatch } from 'react-redux';
import { clearCartAction } from './store/cartReducer';
import SecondModalWindow from './components/SecondModalWindow/SecondModalWindow';



function App() {
  const dispatch = useDispatch();

  const [ modalActive, setModalActive ] = useState(false)

  const closeModalWindow = () => {
    dispatch(clearCartAction())
    setModalActive(false)
  }

  const openModalWindow = () => setModalActive (true)

  const [secondModalActive, setSecondModalActive] = useState(false);
  const closeSecondModalWindow = () => setSecondModalActive(false); 
  const openSecondModalWindow = () => setSecondModalActive(true);


return (
<div>
  <Context.Provider value={{ closeModalWindow, openModalWindow, modalActive, openSecondModalWindow, closeSecondModalWindow, secondModalActive}}>
    <SecondModalWindow/>
    <ModalWindow/>
      <Header/>
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
/**
 
 */