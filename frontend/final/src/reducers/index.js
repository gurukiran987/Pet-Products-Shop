import { combineReducers } from 'redux';
import authReducers from './auth.reducers';
import productReducers from './product.reducer';
import categoryReducers from './category.reducer';
import orderReducers from './order.reducer';
import { ProductDetailsReducer } from './singleproduct';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
    auth: authReducers,
    category: categoryReducers,
    order: orderReducers,
    product:productReducers,
    productDetails:ProductDetailsReducer,
    cart: cartReducer
})

export default rootReducer;
