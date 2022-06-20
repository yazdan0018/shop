import React from 'react';
import styled from "styled-components";
import Sidebar from "./Sidebar";
import useClickOutside from "../hooks/useClickOutside";

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
  padding: 0 40px;
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

const Navbar = ({setOpen,isOpen}) => {
    const handleClick = () => setOpen(!isOpen);
    const { ref } = useClickOutside(() => setOpen(false));
    return (
        <StyledWrapper>
            <p>lMenuButtonogout</p>
            <StyledRight>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
            </StyledRight>
            <div ref={ref}>
                <MenuButton onClick={handleClick}/>
                <Sidebar isOpen={isOpen} setOpen={setOpen}/>
            </div>
        </StyledWrapper>
    );
};

export default Navbar;