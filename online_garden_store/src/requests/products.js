import { loadAllProductsAction } from "../store/allProductsReducer"


export const showAllProducts = (dispatch) => {
        fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)))
    
    
}


