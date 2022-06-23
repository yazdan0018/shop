import React, { useEffect } from 'react';
import styled from "styled-components";
import Sidebar from "./Sidebar";
import useClickOutside from "../hooks/useClickOutside";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tokenRemove } from "../redux/modules/token";

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 80px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //padding: 0 40px;
  @media (max-width: 800px) {
    padding: 0 20px;
  }

  p {
    margin: 0 10px;
  }
`;

const StyledRight = styled.div`
  display: flex;
  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: red;
  display: none;
  cursor: pointer;
  @media (max-width: 800px) {
    display: flex;
  }
`;

const Navbar = ({ setOpen, isOpen }) => {

    // const handleClick = () => setOpen(!isOpen);
    // const { ref } = useClickOutside(() => setOpen(false));
    const navigate = useNavigate();
    const token = useSelector(state => state.token.token);
    const dispatch = useDispatch();


    return (
        <StyledWrapper>
            <>
                <span onClick={() => {
                    navigate('/')
                }}>Home</span>
                <span onClick={() => {
                    navigate('/cart')
                }}>Cart</span>
            </>

            <p onClick={() => {
                navigate('/login')
            }}>{token ? '' : 'Log In'}</p>
            {token ? <p onClick={() => {
                dispatch(tokenRemove())
            }}>Logout</p> : ''}
            {/*<StyledRight>*/}
            {/*    <p>test</p>*/}
            {/*    <p>test</p>*/}
            {/*    <p>test</p>*/}
            {/*    <p>test</p>*/}
            {/*    <p>test</p>*/}
            {/*</StyledRight>*/}
            {/*<div ref={ref}>*/}
            {/*    <MenuButton onClick={handleClick}/>*/}
            {/*    <Sidebar isOpen={isOpen} setOpen={setOpen}/>*/}
            {/*</div>*/}
        </StyledWrapper>
    );
};

export default Navbar;