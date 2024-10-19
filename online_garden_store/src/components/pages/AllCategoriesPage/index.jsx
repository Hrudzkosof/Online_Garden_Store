import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../../requests/categories_req'; 
import { Link } from 'react-router-dom'; 
import s from './index.module.css';

const AllCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategories((data) => {
      console.log('All categories received:', data); 
      setCategories(data); 
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={s.container}>
      <h1 className={s.title}>All Categories</h1>
      
      <Link to="/categories" className={s.allProductsButton}>
        All Products
      </Link>

      <div className={s.categoriesList}>
        {categories.length > 0 ? (
          categories.map((category) => (
            <div className={s.categoryCard} key={category.id}>
              <Link to={`/categories/${category.id}`} className={s.categoryLink}>
                <img 
                  src={`http://localhost:3333${category.image}`} 
                  alt={category.title} 
                  className={s.categoryImage} 
                />
                <div className={s.categoryName}>{category.title}</div>
              </Link>
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default AllCategoriesPage;