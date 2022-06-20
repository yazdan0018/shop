import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './modules/user';
import productReducer from  './modules/product';

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
});

export default rootReducer;