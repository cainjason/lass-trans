import React from 'react'
import styled from 'styled-components';

function Navbar() {
  return (
    <ContainerNavbar>
      <ul>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='/'>About</a>
				</li>
				<li>
					<a href='/'>Contact</a>
				</li>
      </ul>
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