
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product }) => {
  const buttonStyle = {
    backgroundColor: '#6b7c65',
    borderColor: '#6b7c65',
    color: '#fff'
  };

  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text className="text-muted">${product.price}</Card.Text>
        <Button style={buttonStyle}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
