import React from 'react'
import styled from 'styled-components';

function Navbar() {
  return (
    <ContainerNavbar>
      <p>Navbar</p>
    </ContainerNavbar>
  )
}

export default Navbar;

const ContainerNavbar = styled.div`
  background-color: #6666e6;
  color: white;
  height: 80vh;
  width: 260px;
`;