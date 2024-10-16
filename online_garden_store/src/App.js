import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Categories from './components/Categories'; 
import AllCategoriesPage from './components/pages/AllCategoriesPage';
import CategoryDetailsPage from './components/pages/CategoryDetailsPage'; 

function App() {
  return (
  
    <>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/categories/all" element={<AllCategoriesPage />} />
        <Route path="/categories/:id" element={<CategoryDetailsPage />} /> 
      </Routes>
      </>
   
    
  );
};

export default App;
