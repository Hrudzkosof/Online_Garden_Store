import { createStore, combineReducers } from 'redux'
import { allProductsReducer } from './allProductsReducer'
import { salesReducer } from './salesReducer'

const rootReducer = combineReducers ({
    allProducts: allProductsReducer,
    salesProducts: salesReducer

})

export const store = createStore(rootReducer)