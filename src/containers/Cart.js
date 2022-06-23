import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/modules/cart";

const Cart = () => {
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();

    console.log(cart)
    return (
        <Layout>

            {cart.length > 0 ? cart.map((item,idx)=>(
                <div key={idx}>
                    <span>{item.title}</span>
                        <span> ({item.quantity})</span>
                        <button onClick={()=>{
                            dispatch(removeFromCart(item))
                        }
                        }>x</button>
                </div>))
                : 'empty'}
        </Layout>)

};

export default Cart;