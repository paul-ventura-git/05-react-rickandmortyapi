import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function MyCard( props ) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.characterImage} />
      <Card.Body>
        <Card.Title>{props.characterName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Species: {props.characterSpecies}</ListGroup.Item>
        <ListGroup.Item>Created: {props.characterCreated}</ListGroup.Item>
        <ListGroup.Item>Location: {props.characterLocation}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" style={{ marginRight: '20px' }}>Go somewhere</Button>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default MyCard