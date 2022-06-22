import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../containers/HomePage";
import Login from "../containers/Login";
import Cart from "../containers/Cart"

const Router = () => {

    // const token = useSelector(state => state.token.token);

    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    );
};

export default Router;