import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import user, { loadUser } from "../redux/modules/user";
import product, { loadProduct } from "../redux/modules/product";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

// {!loading && loaded && filteredUsers.length ? filteredUsers.map((user, index) =>
//     <p key={index}>{user.name}</p>) : null}

function HomePage() {
    const [filteredUsers, setFilteredUsers] = useState([]);

    const {
        loading: userLoading,
        loaded: userLoaded,
        data: userData,
        error: userError
    } = useSelector(store => store.user);
    const {
        loading: productLoading,
        loaded: productLoaded,
        data: productData,
        error: productError
    } = useSelector(store => store.product);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    useEffect(() => {
        if (userData?.length) {
            setFilteredUsers(userData);
        }
    }, [userData]);

    const renderUsers = () => {
        if (userLoading) {
            return <p>loading...</p>;
        }
        if (!userLoading && userLoaded) {
            if (userError) {
                return <p>something went wrong...</p>;
            }
            if (filteredUsers?.length) {
                return <p>users found</p>

            }
        }
    };

    return (
        <Layout>
            <ProductCard>

            </ProductCard>
        </Layout>
    );
}

export default HomePage;