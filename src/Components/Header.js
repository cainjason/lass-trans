import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <ContainerHeader>
      <p>Header</p>
    </ContainerHeader>
  )
}

export default Header;

const ContainerHeader = styled.div`
  background-color: gold;
  width: 100vw;
  box-shadow: 3px;
`;
