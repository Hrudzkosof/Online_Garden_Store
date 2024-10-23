import { loadAllProductsAction } from "../store/allProductsReducer"
import { loadSingleProductAction } from "../store/singleProductReducer"


export const showAllProducts = (dispatch) => {
        fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)))
}

export const getSingleProduct = (product_id) => {
        return dispatch => {
                fetch(`http://localhost:3333/products/${product_id}`)
                .then(res => res.json())
                .then(json => dispatch(loadSingleProductAction(json[0])))
        }
        
}


