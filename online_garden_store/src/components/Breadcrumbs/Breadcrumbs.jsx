import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import s from './index.module.css';

export default function Breadcrumbs() {
  const location = useLocation();
  const { product_id } = useParams(); // Get product_id from URL
  const [productTitle, setProductTitle] = useState('');
  const [loading, setLoading] = useState(true); // Track loading state
  const pathnames = location.pathname.split('/').filter(x => x); // Get the path segments
  let currentLink = '';

  // Fetch the product title if on a product page
  useEffect(() => {
    if (product_id) {
      console.log(`Fetching product with ID: ${product_id}`);  // Debug log

      // Fetch products from API (change the URL as per your actual API)
      fetch('http://localhost:3333/products/all')
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched products:", data); // Log the fetched data to inspect the response

          // Find the product with the matching ID
          const product = data.find((p) => p.id === Number(product_id)); // Compare as numbers

          if (product) {
            console.log(`Product found: ${product.title}`);  // Log the product title
            setProductTitle(product.title); // Set the title of the product
          } else {
            console.log('Product not found');
            setProductTitle('Product Not Found'); // If no product matches the ID
          }

          setLoading(false); // Stop loading once the data is fetched
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
          setProductTitle('Error Fetching Product'); // Display an error message
          setLoading(false); // Stop loading in case of error
        });
    } else {
      setLoading(false); // If no product_id exists, stop loading
    }
  }, [product_id]);

  // Generate breadcrumbs based on the current URL path
  const crumbs = pathnames.map((crumb, index) => {
    currentLink += `/${crumb}`;
    const isLast = index === pathnames.length - 1;
    const formattedCrumb = crumb
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .replace(/_/g, ' ') // Replace underscores with spaces
      .charAt(0).toUpperCase() + crumb.slice(1);

    return (
      <React.Fragment key={currentLink}>
        {!isLast ? (
          <div className={s.crumb}>
            <Link to={currentLink} className={s.link}>
              {formattedCrumb}
            </Link>
            <span className={s.separator}> &gt; </span>
          </div>
        ) : (
          <span className={`${s.crumb} ${s.currentCrumb}`}>
            {product_id && !isNaN(crumb) ? (loading ? 'Loading...' : productTitle) : formattedCrumb}
          </span>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className={s.breadcrumbs}>
      <div className={s.breadcrumbsContainer}>
        <Link to="/" className={s.link}>Main Page</Link>
        <span className={s.separator}> &gt; </span>
        {crumbs}
      </div>
    </div>
  );
}
