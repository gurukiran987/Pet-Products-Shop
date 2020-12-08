import { productConstants } from "../actions/constants";

const initialState = {
    product: {} 
}

const ProductDetailsReducer = (state = initialState, action) => {
    console.log(action)
    console.log('here1')
    switch(action.type){
        case productConstants.GET_SINGLE_PRODUCTS_REQUEST:
            return { loading : true}
        case productConstants.GET_SINGLE_PRODUCTS_SUCCESS:
            return { loading : false , product : action.payload }
        case productConstants.GET_SINGLE_PRODUCTS_FAILURE:
            return { loading : false , error : action.payload }
        default:
            return state;
    }
    
}

export {ProductDetailsReducer}