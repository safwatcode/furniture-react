import React from 'react';
import Product from './Product';
import products from '../data/products';
import { Container, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  return (
    <Container className='products-container' id='products'>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;

