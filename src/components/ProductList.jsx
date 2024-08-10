/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import products from '../data/products';

const ProductList = ({ products }) => {
  return (
    <Container className="my-5">
      <Row className="w-full d-flex justify-content-around flex-wrap">
        {products.map((product) => (
          <Col
            key={product.id}
            sm={12}
            md={6}
            lg={4}
            className="mb-4 d-flex justify-content-center card-p"
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
