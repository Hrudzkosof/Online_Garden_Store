import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllProductCard from '../../components/AllProductCard/AllProductCard';
import { getCategoryProducts } from '../../requests/categoryProducts_req';
import s from './CategoryProductsPage.module.css';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';

export default function CategoryProductsPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const data = await getCategoryProducts(id);
      setCategory(data.category);
      setProducts(data.data);
    };
    fetchCategoryProducts();
  }, [id]);

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
            <div className={s.cards_container}> 
              <AllProductCard 
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                discont_price={product.discont_price}
              />
              <AddToCartButton product={product} /> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}