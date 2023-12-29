import React from 'react';
import styled from 'styled-components';

function Body() {
  const divStyles = {
    boxShadow: '1px 2px 9px #F4AAB9',
    margin: '4em',
    padding: '1em',
  };
  return (
    <ContainerBody>
      <div style={divStyles}>Lass Transports</div>
    </ContainerBody>
  )
}

export default Body;

const ContainerBody = styled.div`
  background-color: lightgray;
  width: 100vw;
  color: white;
  
`;

