import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import s from './CategoriesContainer.module.css';

export default function CategoriesContainer({ categories, limit }) { // Functional component to render a container for category cards
  return (
    <div className={s.container}>
      <div className={[s.categoriesList, 'categoriesListMain'].join(' ')}>
        {categories.slice(0, limit).map((category) => (             // Loop through the categories array up to the specified limit
          <CategoryCard key={category.id} {...category} />          // Render a CategoryCard component for each category
        ))}
      </div>
    </div>
  );
}