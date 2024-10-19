import React from 'react';
import CardsList from '../Cards';
import s from './index.module.css';
import CategorieName from '../CategorieName';
import FilterForm from '../FilterForm/FilterForm';

const Categories = () => {
  return (
    <div className={s.container}> 
      <CategorieName />
      <CardsList />
    </div>
  );
};

export default Categories;