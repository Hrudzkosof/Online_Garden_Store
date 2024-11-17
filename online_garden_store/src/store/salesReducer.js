import { FILTER_PRODUCTS, SORT_PRODUCTS } from "./allProductsReducer";
  
  const LOAD_PRODUCTS = 'LOAD_PRODUCTS'; // Action type for loading products
 
  // Action creator for loading products
  export const loadProductsAction = (products) => ({
    type: LOAD_PRODUCTS,
    payload: products
  });
  
  // Reducer for managing sale products
  export const salesReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCTS) {
      // Load products and set visible property to true by default
      return action.payload.map(el => {
        el.visible = true;
        return el
    })
    } else if(action.type === SORT_PRODUCTS){
       // Sorting products based on payload
      if(action.payload === 'default'){
          return [...state]
      } else if(action.payload === 'price-asc'){
          state.sort((a,b) => a.price - b.price) // Sort by ascending price
      } else if(action.payload === 'price-desc'){
          state.sort((a,b) => b.price - a.price) // Sort by descending price
          console.log(state)
      } else if(action.payload === 'nameAsc'){
          state.sort((prod1,prod2) => prod1.title.localeCompare(prod2.title)) // Sort by name A-Z
      } else if(action.payload === 'nameDesc'){
          state.sort((prod1,prod2) => prod1.title.localeCompare(prod2.nameDesc)) // Sort by name Z-A
          
      } return [...state]
  } else if(action.type === FILTER_PRODUCTS){
     // Filtering by price range 
    const { min, max } = action.payload;

    state.map(el => {
        el.visible = el.price >= min && el.price <= max ? true : false; // Visible only within price range
        return el;
    }); 
    return [...state]
}
    return state; // Return unchanged state for unhandled actions
  };
  

  // Utility function to get up to 4 random discounted products
export const getRandomDiscountedProducts = (products) => {
    const discountedProducts = products.filter(product => product.discount > 0);  // Filter products with a discount
    
    // If 4 or fewer discounted products are available, return them all
    if (discountedProducts.length <= 4) {
      return discountedProducts;
    }

 // Randomize order and select the first 4 products
    const randomProducts = discountedProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 4); 
  
    return randomProducts;
  };