import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { FaTruckFast } from "react-icons/fa6";

function Header() {
  const [ showNav, setShowNav ] = useState (true)
  return (
    <ContainerHeader>
      <FaTruckFast id='svg' onClick={() => setShowNav(!showNav)}/>

    </ContainerHeader>
  )
}

export default Header;

const ContainerHeader = styled.div`
  background-color: gold;
  box-shadow: 2px;
  width: 100vw;
  height: 30px;
  

  #svg {
    height: 2em;
    width: 2em;
    margin-left: 5px;
  }

  #svg:hover {
    height: 2em;
    width: 2em;
    margin-left: 5px;
    cursor: pointer;
    
  }
  
`;
