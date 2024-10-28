import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { allProductsReducer } from './allProductsReducer'
import { salesReducer } from './salesReducer'
import { singleProductReducer } from './singleProductReducer'
import { cartReducer } from './cartReducer'
import { categoriesReducer } from './categoriesReducer'

const rootReducer = combineReducers ({
    allProducts: allProductsReducer,
    salesProducts: salesReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    categories: categoriesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))