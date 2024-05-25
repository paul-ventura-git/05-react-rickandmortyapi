import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyCardProduct from '../components/MyCardProduct';

function Product() {
  const { productId } = useParams();
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [productId]);
  return (
    <div>
    <Container> 
      <Row>  
      {products.map((product) => (
        <Col key={product.id}>
          <MyCardProduct 
            key={product.id}
            productTitle={product.title} 
            productImage={product.image}
            productDescription={product.description}
            productPrice={product.price}
            productRating={product.rating.rate}
          >
          </MyCardProduct>
        </Col>
      ))}
      </Row>   
    </Container>
  </div>
  )
}

export default Product