import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllProductCard from '../../components/AllProductCard/AllProductCard';
import { useDispatch } from 'react-redux';
import { addProductToCartAction } from '../../store/cartReducer'
import { getCategoryProducts } from '../../requests/categoryProducts_req'
import s from './CategoryProductsPage.module.css'; 

export default function CategoryProductsPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategoryProducts(id).then(data => {
      setCategory(data.category);
      setProducts(data.data);
    });
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch(addProductToCartAction(product));
  };

  return (
    <div>
      {category && (
        <div className={s.categoryHeader}>
          <h1>{category.title}</h1>
        </div>
      )}
      <div className={s.productsContainer}>
        {products.map((product) => (
          <div key={product.id} className={s.productWrapper}>
            <AllProductCard 
              id={product.id} 
              image={product.image} 
              title={product.title} 
              price={product.price} 
              discont_price={product.discont_price} 
            />
            <button 
              onClick={() => handleAddToCart({
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
              })}
              className={s.addToCartButton}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}