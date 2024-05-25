import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CharactersCard from '../components/CharactersCard';

function CharacterById() {
  let { characterId } = useParams();
  
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/'+characterId)
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
          <Col key={characters.id}>
            <CharactersCard 
              key={characters.id}
              characterName={characters.name}
              characterImage={characters.image}
              characterSpecies={characters.species}
              characterCreated={characters.created}
              
            >

            </CharactersCard>
          </Col>
        </Row>   
      </Container>
    </div>
  )
}

export default CharacterById