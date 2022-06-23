import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (action.payload.id) {
                const itemIndex = state.findIndex(item => item.id === action.payload.id);
                if (itemIndex >= 0) {
                    state[itemIndex].quantity += 1;
                } else {
                    const product = { ...action.payload, quantity: 1 };
                    state.push(product);
                }
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        }

    }

});

export const { cart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// import { combineReducers } from 'redux';
//
//
//
//
// export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
// export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
// export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
// export const GET_NUMBER_CART = 'GET_NUMBER_CART';
// export const ADD_CART = 'ADD_CART' ;
// export const UPDATE_CART = 'UPDATE_CART';
// export const DELETE_CART = 'DELETE_CART';
//
// const initProduct = {
//     numberCart:0,
//     Carts:[],
//     _products:[]
// }
//
// function todoProduct(state = initProduct,action){
//     switch(action.type){
//         case GET_ALL_PRODUCT:
//             return{
//                 ...state,
//                 _products:action.payload
//             }
//         case GET_NUMBER_CART:
//             return{
//                 ...state
//             }
//         case ADD_CART:
//             if(state.numberCart==0){
//                 let cart = {
//                     id:action.payload.id,
//                     quantity:1,
//                     name:action.payload.name,
//                     image:action.payload.image,
//                     price:action.payload.price
//                 }
//                 state.Carts.push(cart);
//             }
//             else{
//                 let check = false;
//                 state.Carts.map((item,key)=>{
//                     if(item.id==action.payload.id){
//                         state.Carts[key].quantity++;
//                         check=true;
//                     }
//                 });
//                 if(!check){
//                     let _cart = {
//                         id:action.payload.id,
//                         quantity:1,
//                         name:action.payload.name,
//                         image:action.payload.image,
//                         price:action.payload.price
//                     }
//                     state.Carts.push(_cart);
//                 }
//             }
//             return{
//                 ...state,
//                 numberCart:state.numberCart+1
//             }
//         case INCREASE_QUANTITY:
//             state.numberCart++
//             state.Carts[action.payload].quantity++;
//
//             return{
//                 ...state
//             }
//         case DECREASE_QUANTITY:
//             let quantity = state.Carts[action.payload].quantity;
//             if(quantity>1){
//                 state.numberCart--;
//                 state.Carts[action.payload].quantity--;
//             }
//
//             return{
//                 ...state
//             }
//         case DELETE_CART:
//             let quantity_ = state.Carts[action.payload].quantity;
//             return{
//                 ...state,
//                 numberCart:state.numberCart - quantity_,
//                 Carts:state.Carts.filter(item=>{
//                     return item.id!=state.Carts[action.payload].id
//                 })
//
//             }
//         default:
//             return state;
//     }
// }
// const ShopApp = combineReducers({
//     _todoProduct:todoProduct
// });
// export default ShopApp;