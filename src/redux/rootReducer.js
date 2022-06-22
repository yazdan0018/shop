import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './modules/user';
import productReducer from  './modules/product';
import loginReducer, { login } from './modules/login';
import tokenReducer from './modules/token';

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    login:loginReducer,
    token:tokenReducer
});

export default rootReducer;