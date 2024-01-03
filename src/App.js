import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';

function App() {
  const [ showNav, setShowNav ] = useState (true)
  return (
    <Container className="app">
      <Header onClick={() => setShowNav(!showNav)}/>
			<Section>
    {showNav && <Navbar />}
			<Body />
			<Sidebar />
			</Section>
			<Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
	
`;

const Section = styled.div`
	display: flex;
`;
