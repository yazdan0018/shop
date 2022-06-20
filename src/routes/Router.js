import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../containers/HomePage";

const Router = () => {

    // const token = useSelector(state => state.token.token);

    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    );
};

export default Router;