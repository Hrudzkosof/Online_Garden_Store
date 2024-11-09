import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import s from './CategoriesContainer.module.css';

export default function CategoriesContainer({ categories, limit }) {
  return (
    <div className={s.container}>
      <div className={s.categoriesList}>
        {categories.slice(0, limit).map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}