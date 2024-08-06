import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as RouterLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Navigationbar() {
  return (
    <Navbar expand="lg" className="nav-bar">
      <Container className="nav-container">
        <Navbar.Brand href="/home" className="brand-name">Furniturly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-cont">
            <Nav.Link as={RouterLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/contact">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;

//         <Nav.Link as={RouterLink} to="/home">Home</Nav.Link>
/* <Nav.Link as={RouterLink} to="/products">Link</Nav.Link> */
