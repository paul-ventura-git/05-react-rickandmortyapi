import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductsCard from '../components/ProductsCard';

function ProductById() {
  let { productId } = useParams();
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/'+productId)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        
        setProducts(data);
      });
  }, [productId]);
  return (
    <div>
      <Container> 
        <Row>
          <Col key={products.id}>
            <ProductsCard 
              key={products.id}
              productTitle={products.title} 
              productImage={products.image}
              productDescription={products.description}
              productPrice={products.price}              
            >
            </ProductsCard>
          </Col>
        </Row>   
      </Container>
    </div>
  )
}

export default ProductById