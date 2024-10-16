import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryDetails } from '../../../requests/categories_req';
import s from './index.module.css'

const CategoryDetailsPage = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    getCategoryDetails(id, setCategoryData);
  }, [id]);

  return (
    <div className={s.container}>
      {categoryData ? (
        <div>
          <div className={s.categoryHeader}>
            <h1 className={s.title}>{categoryData.category.title}</h1>
            <img 
              className={s.categoryImage} 
              src={`http://localhost:3333${categoryData.category.image}`} 
              alt={categoryData.category.title} 
            />
          </div>
          <div className={s.productList}>
            {categoryData.data.map((product) => (
              <div key={product.id} className={s.productCard}>
                <img 
                  className={s.productImage} 
                  src={`http://localhost:3333${product.image}`} 
                  alt={product.title} 
                />
                <h2 className={s.productTitle}>{product.title}</h2>
                <p className={s.productDescription}>{product.description}</p>
                <p className={s.productPrice}>
                  ${product.price} 
                  {product.discount_price && <span className={s.oldPrice}> ${product.discount_price}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Category not found.</p>
      )}
    </div>
  );
};

export default CategoryDetailsPage;