import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { allProductsReducer } from './allProductsReducer'
import { salesReducer } from './salesReducer'
import { singleProductReducer } from './singleProductReducer'

const rootReducer = combineReducers ({
    allProducts: allProductsReducer,
    salesProducts: salesReducer,
    singleProduct: singleProductReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))