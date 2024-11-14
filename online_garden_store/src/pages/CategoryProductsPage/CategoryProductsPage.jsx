
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllProductCard from '../../components/AllProductCard/AllProductCard';
import { getCategoryProducts } from '../../requests/categoryProducts_req'; 
import s from './CategoryProductsPage.module.css';
import FilterForm from '../../components/FilterForm/FilterForm';
import Footer from '../../components/Footer/Footer'; 

export default function CategoryProductsPage() {  // Functional component for displaying products of a specific category
  const { id } = useParams();                     // Get the category ID from the URL parameters
  const [products, setProducts] = useState([]);   // State to hold products and category information
  const [category, setCategory] = useState(null);

  useEffect(() => {                              // Fetch products for the specific category when the component mounts or the category ID changes
    getCategoryProducts(id).then((data) => {
      setCategory(data.category);                // Set the category details
      setProducts(data.data);                    // Set the list of products for this category
    });
  }, [id]);                                      // Dependency array ensures the effect runs when the category ID changes

  return (
    <div>                                        {/* Display the category title if available */}
      {category && (
        <div>
          <h1 className={s.categoryHeader}>{category.title}</h1>
        </div>
      )}

      <FilterForm />                              {/* Render the filter form for product filtering */}

      <div className={s.productsContainer}>       {/* Display the list of products in a grid format */}
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
      <Footer/>                                   {/* Render the footer at the bottom of the page */}
    </div>
  );
}