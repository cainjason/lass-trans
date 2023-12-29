import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <Container className="app">
      <Header />
			<Section>
      <Navbar />
			<Body />
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
