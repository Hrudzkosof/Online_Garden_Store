
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllProductCard from '../../components/AllProductCard/AllProductCard';
import { getCategoryProducts } from '../../requests/categoryProducts_req'; 
import s from './CategoryProductsPage.module.css';
import FilterForm from '../../components/FilterForm/FilterForm';
import Footer from '../../components/Footer/Footer'; 

export default function CategoryProductsPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getCategoryProducts(id).then((data) => {
      setCategory(data.category);
      setProducts(data.data);
    });
  }, [id]);

  return (
    <div>
      {category && (
        <div>
          <h1 className={s.categoryHeader}>{category.title}</h1>
        </div>
      )}

      <FilterForm />

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
                product={product}
              />
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}