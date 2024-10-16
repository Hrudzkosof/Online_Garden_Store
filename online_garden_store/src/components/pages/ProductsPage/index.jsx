import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategoryId } from '../../../requests/categories_req';

const ProductsPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategoryId(id, setProducts);
  }, [id]);

  return (
    <div>
      <h1>Products for Category {id}</h1>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;