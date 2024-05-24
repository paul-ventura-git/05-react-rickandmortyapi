import './App.css';
import MyCard from './components/MyCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import Home from "./pages/Home";
import Product from "./pages/Products";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,183')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCharacters(data);
      });
  }, []);
  return (
    <div className="App">
      <h1>The Rick and Morty api</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>

      <Container> 
        <Row>  
        {characters.map((character) => (
          <Col key={character.id}>
            <MyCard 
              key={character.id}
              characterName={character.name} 
              characterImage={character.image}
              characterSpecies={character.species}
              characterCreated={character.created}
              characterLocation={character.location.name}
            >
            </MyCard>
          </Col>
        ))}
        </Row>   
      </Container>
      
    </div>
  );
}

export default App;
