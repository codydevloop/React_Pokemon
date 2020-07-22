//import logo from './logo.svg';
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DesktopImage from "./components/images/poke.JPG";
import Container from 'react-bootstrap/Container';
import PokemonContainer from "./components/PokemonContainer/PokemonContainer";





function App() {
  return (

    <Container className="background">
      <PokemonContainer>


      </PokemonContainer>
    </Container>

  );
}

export default App;
