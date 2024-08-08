import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import products from "../data/products";

const ProductList = () => {
  return (
    <Container className="my-5">
      <Row className="d-flex justify-content-center">
        {products.map((product) => (
          <Col
            key={product.id}
            sm={12}
            md={6}
            lg={4}
            className="mb-4 d-flex justify-content-center"
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
