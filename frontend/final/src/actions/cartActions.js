import axios from "../helpers/axios";
import { cartConstants } from './constants';
import Cookie from 'js-cookie' 

export const addToCart = (productId,qty) => {
    return async (dispatch , getState) => {
        try {
            const { data } = await axios.get("/products/" + productId);
            console.log(data)
            console.log('nice')
            dispatch({
                type: cartConstants.CART_ADD_ITEM, 
                payload : {
                    product : data._id,
                    name : data.name,
                    image : data.productPictures[0].img,
                    price : data.price,
                    countInStock : data.quantity,
                    qty
                }
            });
            const { cart : { cartItems} } = getState();
            Cookie.set("cartItems",JSON.stringify(cartItems));
        } catch (error) {
            console.log('bad')
        }
    }
}

export const removeFromCart = (productId) => {
    return async (dispatch , getState) => {
        dispatch({
            type:cartConstants.CART_REMOVE_ITEM,
            payload : productId
        })
        const { cart : { cartItems} } = getState();
        Cookie.set("cartItems",JSON.stringify(cartItems));
    }
}

export const saveShipping = (data) => {
    return async (dispatch) => {
        dispatch({
            type:cartConstants.CART_SAVE_SHIPPING,
            payload: data
        })
    }
}

export const savePayment = (data) => {
    return async (dispatch) => {
        dispatch({
            type:cartConstants.CART_SAVE_PAYMENT,
            payload: data
        })
    }
}