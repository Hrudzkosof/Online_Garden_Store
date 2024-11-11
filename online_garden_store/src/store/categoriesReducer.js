import { SORT_PRODUCTS, DISCOUNT_PRODUCTS, FILTER_PRODUCTS } from "./allProductsReducer";

const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
const LOAD_ONE_CATEGORY = 'LOAD_ONE_CATEGORY';

export const loadCategoriesAction = categories => ({ type: LOAD_CATEGORIES, payload: categories });
export const loadOneCategoryAction = products => ({ type: LOAD_ONE_CATEGORY, payload: products });

export const categoriesReducer = (state=[], action) => {
    if(action.type === LOAD_CATEGORIES){
        return action.payload
    }
    return state
}

export const oneCategoryReducer = (state = [], action) => {
    if(action.type === LOAD_ONE_CATEGORY){

    }
    return state
}

