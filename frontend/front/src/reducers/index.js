import { combineReducers } from 'redux';
import authReducers from './auth.reducers';
import productReducers from './product.reducer';
import categoryReducers from './category.reducer';

const rootReducer = combineReducers({
    auth: authReducers,
    category: categoryReducers,
    product:productReducers
})

export default rootReducer;
