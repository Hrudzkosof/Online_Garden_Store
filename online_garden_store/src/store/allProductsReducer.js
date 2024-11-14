export const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
export const SORT_PRODUCTS = 'SORT_PRODUCTS';
export const DISCOUNT_PRODUCTS = 'DISCOUNT_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'


export const loadAllProductsAction = products => ({ type: LOAD_ALL_PRODUCTS, payload: products});
export const sortProductsAction = value => ({ type: SORT_PRODUCTS, payload: value});
export const getDiscountProductsAction = value => ({ type: DISCOUNT_PRODUCTS, payload: value });
export const filterProductsAction = values => ({ type: FILTER_PRODUCTS, payload: values})


export const allProductsReducer = (state = [], action) => {
    if(action.type === LOAD_ALL_PRODUCTS){
        return action.payload.map(el => {
            el.visible = true;
            return el
        })
    } else if(action.type === SORT_PRODUCTS){
        if(action.payload === 'default'){
            return [...state]
        } else if(action.payload === 'price-asc'){
            state.sort((a,b) => a.price - b.price)
        } else if(action.payload === 'price-desc'){
            state.sort((a,b) => b.price - a.price)
            console.log(state)
        } else if(action.payload === 'nameAsc'){
            state.sort((prod1,prod2) => prod1.title.localeCompare(prod2.title))
        } else if(action.payload === 'nameDesc'){
            state.sort((prod1,prod2) => prod1.title.localeCompare(prod2.nameDesc))
            
        } return [...state]
    }
        else if(action.type === DISCOUNT_PRODUCTS){
            if(action.payload){
                state.map(el => {
                    if(el.discont_price <= 0){
                        el.visible = false
                    }
                    return el
                })
            } else {
                state.map(el => {
                    el.visible = true;
                    return el
                })
            }
            return [...state]
    } else if(action.type === FILTER_PRODUCTS){
        const { min, max } = action.payload;

        state.map(el => {
            el.visible = el.price >= min && el.price <= max ? true : false;
            return el;
        }); 
        return [...state]
    }

    return state
} 