import React from 'react';
import { Link } from 'react-router-dom';
import s from './CategoryCard.module.css';

export default function CategoryCard({ title, image, id }) {
  return (
    <div className={s.category_card}>
      <Link to={`/categories/${id}`}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <p>{title}</p>
      </Link>
    </div>
  );
}