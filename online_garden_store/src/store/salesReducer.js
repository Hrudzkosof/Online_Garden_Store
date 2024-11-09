import { FILTER_PRODUCTS, SORT_PRODUCTS } from "./allProductsReducer";
  
  const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
 
  export const loadProductsAction = (products) => ({
    type: LOAD_PRODUCTS,
    payload: products
  });
  
  export const salesReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCTS) {
      return action.payload.map(el => {
        el.visible = true;
        return el
    })
    } else if(action.type === SORT_PRODUCTS){
      if(action.payload === 'default'){
          return [...state]
      } else if(action.payload === 'price-asc'){
          state.sort((a,b) => a.price - b.price)
      } else if(action.payload === 'price-desc'){
          state.sort((a,b) => b.price - a.price)
          console.log(state)
      } else if(action.payload === 'nameAsc'){
          state.sort((prod1,prod2) => prod1.title.localeCompare(prod2.title))
      } else if(action.payload === 'nameDesc'){
          state.sort((prod1,prod2) => prod1.title.localeCompare(prod2.nameDesc))
          
      } return [...state]
  } else if(action.type === FILTER_PRODUCTS){
    const { min, max } = action.payload;

    state.map(el => {
        el.visible = el.price >= min && el.price <= max ? true : false;
        return el;
    }); 
    return [...state]
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