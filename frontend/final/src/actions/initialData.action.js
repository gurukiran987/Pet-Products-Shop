import axios from "../helpers/axios"
import { categoryConstants, productConstants } from "./constants";

export const getInitialData = () => {
    return async dispatch => {
        const res = await axios.post('/initialData')
        if(res.status === 200){
            const { categories , products } = res.data;
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload : { categories }
            });
            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload : { products }
            });           
        }
         console.log(res)
    }
}

export const detailsProduct = (urlid1) => {
    return async dispatch => {

        try{
            dispatch({type: productConstants.GET_SINGLE_PRODUCTS_REQUEST , payload : urlid1});
            const { data } = await axios.get('/products/' + urlid1)
            dispatch({type: productConstants.GET_SINGLE_PRODUCTS_SUCCESS , payload : data});
        } catch (error){
            dispatch({type: productConstants.GET_SINGLE_PRODUCTS_FAILURE , payload : error.message});
        }
         
    }
}
