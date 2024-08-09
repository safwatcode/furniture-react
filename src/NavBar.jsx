import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as RouterLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";

function Navigationbar() {
  return (
    <Navbar expand="lg" className="nav-bar">
      <Container className="nav-container">
        <img src="/images/homes-logo2.png" alt="logo" className="logo-img" />
        <Navbar.Brand href="/home" className="brand-name">
          Homes Furniture
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-cont">
            <Nav.Link as={RouterLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/aboutus">
              About
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/ContactUs">
              Contact us
            </Nav.Link>
            <div className="reg-buttons">
              <Nav.Link as={RouterLink} to="/login" className="sign-btn rbtn">
                Sign in
              </Nav.Link>
              <Nav.Link as={RouterLink} to="/regester" className="reg-btn rbtn">
                Register
              </Nav.Link>
            </div>

            {/* <div className="buttons">
              <Button href="./products" target="_blank" className="explore-btn">
                Buy Now!
              </Button>
              <Button href="./products"  className="explore-btn">
                Explore
              </Button>
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;

//         <Nav.Link as={RouterLink} to="/home">Home</Nav.Link>
/* <Nav.Link as={RouterLink} to="/products">Link</Nav.Link> */
