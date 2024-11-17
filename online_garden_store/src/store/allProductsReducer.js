export const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS'; // Action type for loading all products
export const SORT_PRODUCTS = 'SORT_PRODUCTS'; // Action type for sorting products
export const DISCOUNT_PRODUCTS = 'DISCOUNT_PRODUCTS'; // Action type for filtering products with a discount
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'; // Action type for filtering products by price range

// Action creators
export const loadAllProductsAction = products => ({ type: LOAD_ALL_PRODUCTS, payload: products});
export const sortProductsAction = value => ({ type: SORT_PRODUCTS, payload: value});
export const getDiscountProductsAction = value => ({ type: DISCOUNT_PRODUCTS, payload: value });
export const filterProductsAction = values => ({ type: FILTER_PRODUCTS, payload: values})

// Reducer for managing all products
export const allProductsReducer = (state = [], action) => {
    if(action.type === LOAD_ALL_PRODUCTS){
         // Load all products and set visible property to true by default
        return action.payload.map(el => {
            el.visible = true;
            return el
        })
    } else if(action.type === SORT_PRODUCTS){
         // Sorting products based on payload
        if(action.payload === 'default'){
            return [...state]
        } else if(action.payload === 'price-asc'){
            state.sort((a,b) => a.price - b.price)  // Sort by ascending price
        } else if(action.payload === 'price-desc'){
            state.sort((a,b) => b.price - a.price) // Sort by descending price
            console.log(state)
        } else if(action.payload === 'nameAsc'){
            state.sort((prod1,prod2) => prod1.title.localeCompare(prod2.title)) // Sort by name A-Z 
        } else if(action.payload === 'nameDesc'){
            state.sort((prod1,prod2) => prod1.title.localeCompare(prod2.nameDesc)) // Sort by name Z-A 
            
        } return [...state]
    }
        else if(action.type === DISCOUNT_PRODUCTS){
            // Filtering by discount visibility
            if(action.payload){
                state.map(el => {
                    if(el.discont_price <= 0){  // Only visible if there is a discount
                        el.visible = false
                    }
                    return el
                })
            } else {
                state.map(el => {
                    el.visible = true; // All products are visible
                    return el
                })
            }
            return [...state]
    } else if(action.type === FILTER_PRODUCTS){
        // Filtering by price range
        const { min, max } = action.payload;

        state.map(el => {
            el.visible = el.price >= min && el.price <= max ? true : false; // Visible only within price range
            return el;
        }); 
        return [...state]
    }

    return state // Returning unchanged state for other actions
} 