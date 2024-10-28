import React, { useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import s from './CategoriesContainer.module.css';

export default function CategoriesContainer({ categories }) {
  const [showAll, setShowAll] = useState(false);
  
  const handleShowAll = () => setShowAll(true);

  return (
    <div className={s.container}>
      <div className={s.headerContainer}>
        <h1 className={s.title}>Categories</h1>
        <div className={s.line}></div>
        <div className={s.rectangle}>
          <button onClick={handleShowAll} className={s.rectangleText}>
            All Categories
          </button>
        </div>
      </div>

      <div className={s.categoriesList}>
        {(showAll ? categories : categories.slice(0, 4)).map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}