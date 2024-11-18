import { domain } from '../../domain';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './CategoryCard.module.css';

export default function CategoryCard({ title, image, id }) {        // Functional component to render a single category card
  return (
    <div className={s.category_card}>
      <Link to={`/categories/${id}`}>                               {/* Link to the category details page using the category ID */}
        <img src={`${domain}${image}`} alt={title} />   {/* Display category image */}
        <p>{title}</p>
      </Link>
    </div>
  );
}