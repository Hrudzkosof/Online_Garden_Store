import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryDetails } from '../../../requests/categories_req';
import s from './index.module.css';

const CategoryDetailsPage = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [expandedProduct, setExpandedProduct] = useState(null); 

  useEffect(() => {
    getCategoryDetails(id, setCategoryData);
  }, [id]);

  
  const toggleDescription = (productId) => {
    setExpandedProduct((prevId) => (prevId === productId ? null : productId)); 
  };

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
                <h2 
                  className={s.productTitle} 
                  onClick={() => toggleDescription(product.id)} 
                >
                  {product.title}
                </h2>
                <p className={s.productPrice}>
                  ${product.price} 
                  {product.discont_price && <span className={s.oldPrice}> ${product.discont_price}</span>}
                </p>
                
                {expandedProduct === product.id && (
                  <p className={s.productDescription}>{product.description}</p>
                )}
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