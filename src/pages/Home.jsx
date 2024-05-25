import React from 'react'
import { useState, useEffect } from 'react';
import MyCard from '../components/MyCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
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
    <div>
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
  )
}

export default Home