import styled from 'styled-components';

function Navbar() {
  return (
    <ContainerNavbar className='nav active'>
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
  background-color: darkgoldenrod;
  color: white;
  height: 80vh;
  width: 260px;
  padding: 0px 30px;
  left: 0;
  
  .nav.active {
    left: -100%;
    transition: all 3s;
  }

  ul {
    padding: 0;
  }

  ul li {
    list-style-type: none;
    margin: 10px 0;

  }

  ul li:hover {
    list-style-type: none;
    background-color: lightgray;

  }
  
  ul li a,
  ul li a:active {
    color: white;
    text-decoration: none;
    font-size: 20px;
    display: block;
    padding: 10px 15px;
    border-radius: 6px;
  }

`;