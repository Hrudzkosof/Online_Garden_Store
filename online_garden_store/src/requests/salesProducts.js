import { domain } from "../domain";
import { loadProductsAction } from "../store/salesReducer";
// Function to fetch sale products, adjust list if needed, and dispatch to Redux 
export const getSaleProducts = (dispatch) => 
  fetch(`${domain}/products/all`)
    .then(response => response.json())
    .then(products => {
     
      // Filtering products to only include those with a discount
      let discountedProducts = products.filter(product => product.discont_price !== null && product.discont_price < product.price);

      dispatch(loadProductsAction(discountedProducts)); // Dispatching initial set of discounted products

      // Ensuring at least 4 discounted products by duplicating if needed
      if (discountedProducts.length < 4) {
        const additionalProducts = Array.from({ length: 4 - discountedProducts.length }, (_, i) => discountedProducts[i % discountedProducts.length]);
        discountedProducts = discountedProducts.concat(additionalProducts);
      }

      // Randomizing order and selecting the first 4 products
      discountedProducts = discountedProducts
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

   
      return discountedProducts; // Returning the final list of discounted products
    })
   
