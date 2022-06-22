import React, { useEffect } from "react";
import { loadProduct } from "../redux/modules/product";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`;

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 250px;
  margin: 20px;
  background-color: #f3f2f2;
  border-radius: 10px;

  img {
    height: 100px;
    width: 150px;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }

  p {
    overflow: auto;
    margin: 5px;
  }
  
  button{
    background-color: orange;
  }
`;

const ProductCard = () => {

    const {
        loading: productLoading,
        loaded: productLoaded,
        data: productData,
        error: productError
    } = useSelector(store => store.product);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProduct());
    }, [dispatch]);

    return (
        <ProductWrapper>
            {productData ? Object.values(productData).map((data, idx) => {
                    return (
                        <ProductCardWrapper key={idx}>
                            <img src={data.image} alt={data.id}/>
                            <p>{data.title}</p>
                            <p>{data.price}$</p>
                            <button>Add to cart</button>
                        </ProductCardWrapper>
                    )
                })
                : <div>Loading ...</div>
            }
        </ProductWrapper>
    )
}

export default ProductCard;