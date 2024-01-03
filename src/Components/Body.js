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
      <form>
        <label>Frist Name</label>
        <br />
        <input type='text' id='fname' name='fname'></input>
        <br />
        <label>Last Name</label>
        <br />
        <input type='text' id='lname'name='lname'></input>
        <br />
        <label>Email</label>
        <br />
        <input type='email' id='email' placeholder='lasstran@gmail.com'></input>
        <br />
        <label>Phone Number</label>
        <br />
        <input type='text'></input>
      </form>
    </ContainerBody>
  )
}

export default Body;

const ContainerBody = styled.div`
  background-color: lightgray;
  width: 100vw;
  color: white;
  
`;

