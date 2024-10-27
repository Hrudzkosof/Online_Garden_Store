const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';

export const addProductToCartAction = product => ({ type: ADD_PRODUCT_TO_CART, payload: product });
export const deleteProductFromCartAction = product_id => ({ type: DELETE_PRODUCT_FROM_CART, payload: product_id });
export const decrementCountAction = product_id => ({ type: DECREMENT_COUNT, payload: product_id });
export const incrementCountAction = product_id => ({ type: INCREMENT_COUNT, payload: product_id });

const checkProduct = (state, payload) => {
    const product = state.find(el => el.id === payload.id);

    if (product) {
        return state.map(el => 
            el.id === product.id ? { ...el, count: el.count + (payload.count > 1 ? payload.count : 1) } : el
        );
    } else {
        return [...state, { ...payload, count: 1 }];
    }
};

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return checkProduct(state, action.payload);
        case DELETE_PRODUCT_FROM_CART:
            return state.filter(el => el.id !== action.payload);
        case INCREMENT_COUNT:
            return state.map(el =>
                el.id === action.payload ? { ...el, count: el.count + 1 } : el
            );
        case DECREMENT_COUNT:
            return state.map(el =>
                el.id === action.payload 
                    ? { ...el, count: el.count > 1 ? el.count - 1 : el.count }
                    : el
            ).filter(el => el.count > 0);
        default:
            return state;
    }
};