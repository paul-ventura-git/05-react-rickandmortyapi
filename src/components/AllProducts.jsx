import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function AllProducts( props ) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.productImage} />
      <Card.Body>
        <Card.Title>{props.productTitle}</Card.Title>
        <Card.Text>
          {props.productDescription}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Category: {props.productCategory}</ListGroup.Item>
        <ListGroup.Item>Price: {props.productPrice}</ListGroup.Item>
        <ListGroup.Item>Rating: {props.productRating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" style={{ marginRight: '20px' }}>Go somewhere</Button>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default AllProducts