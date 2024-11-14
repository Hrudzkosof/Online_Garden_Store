const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'; // Action type for adding a product to cart
const DECREMENT_COUNT = 'DECREMENT_COUNT'; // Action type for decreasing product quantity
const INCREMENT_COUNT = 'INCREMENT_COUNT'; // Action type for increasing product quantity
const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART'; // Action type for removing a product from cart
const CLEAR_CART = 'CLEAR_CART'; // Action type for clearing the cart

// Action creators
export const addProductToCartAction = product => ({ type: ADD_PRODUCT_TO_CART, payload: product });
export const deleteProductFromCartAction = product_id => ({ type: DELETE_PRODUCT_FROM_CART, payload: product_id });
export const decrementCountAction = product_id => ({ type: DECREMENT_COUNT, payload: product_id });
export const incrementCountAction = product_id => ({ type: INCREMENT_COUNT, payload: product_id });
export const clearCartAction = () => ({ type: CLEAR_CART });

// Helper function to check if product exists in cart
const checkProduct = (state, payload) => {
    const product = state.find(el => el.id === payload.id); // Check if product already exists in cart

    if (product) {
         // If product exists, increment its count
        return state.map(el => 
            el.id === product.id ? { ...el, count: el.count + (payload.count > 1 ? payload.count : 1) } : el
        );
    } else {
        // If product is new, add it to the cart with count 1 
        return [...state, { ...payload, count: 1 }];
    }
};

// Load default state from local storage or set to empty array 
const defaultState = JSON.parse(localStorage.getItem('cart')) || [];

// Reducer function to manage cart state 
export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return checkProduct(state, action.payload); // Adds product or increments count if it exists
        case DELETE_PRODUCT_FROM_CART:
            return state.filter(el => el.id !== action.payload);  // Removes product from cart
        case INCREMENT_COUNT:
            return state.map(el =>
                el.id === action.payload ? { ...el, count: el.count + 1 } : el // Increments count for the specified product
            );
        case DECREMENT_COUNT:
            return state.map(el =>
                el.id === action.payload 
                    ? { ...el, count: el.count > 1 ? el.count - 1 : el.count }  // Decreases count if greater than 1, otherwise keeps it 
                    : el
            ).filter(el => el.count > 0); // Filters out products with a count of 0
        case CLEAR_CART:  // Clears all items from cart
            return [];
        default:
            return state; // Returns the current state for unhandled actions
    }
};