import React from 'react';
import Header from '../Header';
import CardsList from '../Cards';
import s from './index.module.css';

const Categories = () => {
  return (
    <div className={s.container}> 
      <Header />
      <CardsList />
    </div>
  );
};

export default Categories;