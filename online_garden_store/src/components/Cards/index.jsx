import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import category1Image from '../images/category_1.png';
import category2Image from '../images/category_2.png';
import category3Image from '../images/category_3.png';
import category4Image from '../images/category_4.png';

const Card = ({ categoryId, imageUrl }) => {
  return (
    <Link to={`/categories/${categoryId}`} className={s.card}>
      <img src={imageUrl} alt={`Category ${categoryId}`} className={s.image} />
    </Link>
  );
};

const CardsList = () => {
  const categories = [
    { id: 1, imageUrl: category1Image },
    { id: 2, imageUrl: category2Image },
    { id: 3, imageUrl: category3Image },
    { id: 4, imageUrl: category4Image },
  ];

  return (
    <div className={s.container}>
      {categories.map((category) => (
        <Card key={category.id} categoryId={category.id} imageUrl={category.imageUrl} />
      ))}
    </div>
  );
};

export default CardsList;