import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CharactersCard from '../components/CharactersCard';

function AllCharactersPage() {
  let { characterId } = useParams();

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
  }, [characterId]);
  return (
    <div>
      <Container> 
        <Row>  
        {characters.map((character) => (
          <Col key={character.id}>
            <CharactersCard 
              key={character.id}
              characterName={character.name} 
              characterImage={character.image}
              characterSpecies={character.species}
              characterCreated={character.created}
              characterLocation={character.location.name}
            >
            </CharactersCard>
          </Col>
        ))}
        </Row>   
      </Container>
    </div>
  )
}

export default AllCharactersPage