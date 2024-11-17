import { domain } from "../domain"
import { loadAllProductsAction } from "../store/allProductsReducer"
import { loadSingleProductAction } from "../store/singleProductReducer"

// Function to fetch and dispatch all products to Redux store
export const showAllProducts = (dispatch) => {
        fetch(`${domain}/products/all`)
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json))) // Dispatching the action with the JSON data
}

// Function to fetch and dispatch a single product based on product_id
export const getSingleProduct = (product_id) => {
        return dispatch => { // Returning a function to handle asynchronous dispatching
                fetch(`${domain}/products/${product_id}`)
                .then(res => res.json())
                .then(json => dispatch(loadSingleProductAction(json[0])))  // Dispatching the action with the first item in JSON array 
        }
        
}


