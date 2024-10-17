
const defaultState = {
    data: [],
    discountedProducts: [] 
  };
  
  
  const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
  const LOAD_DISCOUNTED_PRODUCTS = 'LOAD_DISCOUNTED_PRODUCTS';
  
 
  export const loadProductsAction = (products) => ({
    type: LOAD_PRODUCTS,
    payload: products
  });
  

  export const loadDiscountedProductsAction = (products) => ({
    type: LOAD_DISCOUNTED_PRODUCTS,
    payload: products
  });
  
  
  export const salesReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCTS) {
      return {
        ...state,
        data: action.payload
      };
    } 
    
    if (action.type === LOAD_DISCOUNTED_PRODUCTS) {
      return {
        ...state,
        discountedProducts: action.payload 
      };
    }
    
    return state;
  };
  
 
  export const getRandomDiscountedProducts = (products) => {
    const discountedProducts = products.filter(product => product.discount > 0);
    
   
    if (discountedProducts.length <= 4) {
      return discountedProducts;
    }


    const randomProducts = discountedProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 4); 
  
    return randomProducts;
  };