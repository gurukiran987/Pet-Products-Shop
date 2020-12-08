import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie'

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart : { cartItems, shipping:{}, payment:{} } }
const store = createStore(rootReducer,initialState,applyMiddleware(thunk));

export default store;