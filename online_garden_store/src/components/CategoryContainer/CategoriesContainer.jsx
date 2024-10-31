import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import s from './CategoriesContainer.module.css';

export default function CategoriesContainer({ categories, showAll }) {
  return (
    <div className={s.container}>
      <div className={s.categoriesList}>
        {(showAll ? categories : categories.slice(0, 4)).map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}