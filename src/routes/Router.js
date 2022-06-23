import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../containers/HomePage";
import Login from "../containers/Login";
import Cart from "../containers/Cart";
import { useSelector } from "react-redux";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnAuthenticatedRoute from "./UnAuthenticatedRoute";

const Router = () => {

    const token = useSelector(state => state.token.token);

    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={
                <UnAuthenticatedRoute isAuthenticated={token}>
                    <Login/>
                </UnAuthenticatedRoute>
            }/>
            <Route path='/cart' element={
                <AuthenticatedRoute isAuthenticated={token}>
                    <Cart/>
                </AuthenticatedRoute>
            }/>
        </Routes>
    );
};

export default Router;

