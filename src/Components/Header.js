import React from 'react'
import styled from 'styled-components';
import { FaTruckFast } from "react-icons/fa6";

function Header() {
  
  return (
    <ContainerHeader>
      <FaTruckFast id='svg' />

    </ContainerHeader>
  )
}

export default Header;

const ContainerHeader = styled.div`
  background-color: gold;
  width: 100vw;
  height: 30px;
  

  #svg {
    height: 2em;
    width: 2em;
    margin-left: 5px;
  }
  
`;
