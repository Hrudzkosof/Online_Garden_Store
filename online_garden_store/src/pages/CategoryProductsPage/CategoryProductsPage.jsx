
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AllProductCard from '../../components/AllProductCard/AllProductCard';
import FilterForm from '../../components/FilterForm/FilterForm';
import Footer from '../../components/Footer/Footer';
import { getCategoryProducts } from '../../requests/categoryProducts_req';
import { loadAllProductsAction } from '../../store/allProductsReducer';
import s from './CategoryProductsPage.module.css';

export default function CategoryProductsPage() {  // Functional component for displaying products of a specific category
  const { id } = useParams();                     // Get the category ID from the URL parameters
     // State to hold products and category information
  const [category, setCategory] = useState(null);

  const allProducts = useSelector(state => state.oneCategoryProducts)

  const dispatch = useDispatch();

  useEffect(() => {
    getCategoryProducts(id).then((data) => {
      setCategory(data.category);
      dispatch(loadAllProductsAction(data.data)) ;
    });
  }, [id, dispatch]);

  return (
    <div>                                        {/* Display the category title if available */}
      {category && (
        <div>
          <h1 className={s.categoryHeader}>{category.title}</h1>
        </div>
      )}

      <FilterForm />                              {/* Render the filter form for product filtering */}

      <div className={s.productsContainer}>
        {allProducts
        .filter(product => product.visible)
        .map((product) => (
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
      <Footer/>                                   {/* Render the footer at the bottom of the page */}
    </div>
  );
}