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
      <hr></hr>
      <form className='form'>
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
      <button className='button' type='submit'>Submit</button>
      <p> Clisk to Submit </p>
      <hr></hr>
    </ContainerBody>
  )
}

export default Body;

const ContainerBody = styled.div`
  background-color: lightgray;
  width: 100vw;
  color: white;

  .form {
    font-size: large;
    font-weight: bolder;
    margin-left: 5px;
  }
  
  .button {
    margin-top: 5px;
    margin-left: 5px;
    height: 25px;
    width: 60px
  }
`;

