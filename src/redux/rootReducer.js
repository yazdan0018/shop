import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './modules/user';
import productReducer from './modules/product';
import loginReducer from './modules/login';
import tokenReducer from './modules/token';
import cartReducer from './modules/cart';

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    login: loginReducer,
    token: tokenReducer,
    cart : cartReducer
});

export default rootReducer;