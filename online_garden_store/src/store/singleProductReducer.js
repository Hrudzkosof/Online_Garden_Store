const defaultState = {
    data: {},
    status: 'loading'
}

const LOAD_SINGLE_PORDUCT= 'LOAD_SINGLE_PORDUCT'

export const loadSingleProductAction = product = ({ type: LOAD_SINGLE_PORDUCT, payload: product })

export const singleProductReducer = (state = defaultState, action) => { 
   if(action.type === LOAD_SINGLE_PORDUCT){
    return {
        data: action.payload,
        status: 'ready'
    }
   }

    return state
}