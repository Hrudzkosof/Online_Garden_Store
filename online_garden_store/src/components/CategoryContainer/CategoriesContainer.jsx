import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import s from './CategoriesContainer.module.css';

export default function CategoriesContainer({ categories }) {
  return (
    <div className={s.container}>
      <div className={s.categoriesList}>
        {categories.map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}