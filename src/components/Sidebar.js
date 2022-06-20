import React from 'react';
import styled from "styled-components";

const StyledSidebar = styled.div`
  display: none;
  position: fixed;
  top: 80px;
  width: 100px;
  height: 100%;
  border-left: 1px solid black;
  transition: right 0.3s ease;
  right: ${({ isOpen }) => !isOpen ? '-100px' : '0'};
  @media (max-width: 800px) {
    display: flex;
  }
`;

const Sidebar = ({ isOpen }) => {

    return (
        <StyledSidebar isOpen={isOpen}>
            hi
        </StyledSidebar>
    );
};

export default Sidebar;