/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="page">
      <div className="landing-container">
        <div className="text-container">
          <h2 className="landing-header">Furniture For Everyone Loves</h2>
          <p className="landing-text">
            Discover our wide range of furniture options, from living rooms to
            bedrooms, and experience the joy of living with style.
          </p>
          <div className="buttons">
            <Button href="./products" target="_blank" className="explore-btn">
              Buy Now!
            </Button>
            <Button href="./products" target="_blank" className="explore-btn">
              Explore
            </Button>
          </div>
        </div>
        <div className="images">
          <div className="image1">
            <Image
              src="/images/green sofa livingroom_13228111.png"
              alt="Furniture"
              fluid
            />
          </div>
          <div className="image2">
            <Image
              src="/images/realistic-modern-stylish-golden-white-standard-lamp-vector-illustration.png"
              alt="Furniture"
              fluid
            />
          </div>
        </div>
      </div>
    













      {/* <div className="footer">
        <div class="container">
          <div class="content">
            <div class="logo">
              <img src="logo.png" alt="Logo" />
              <h1>Wardiere Inc.</h1>
            </div>
            <p>Stay in the loop and sign up for the Wardiere newsletter:</p>
            <div class="input-group">
              <input type="email" placeholder="Enter your email" />
              <button>→</button>
            </div>
            <div class="links">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Help Centre</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
            <footer>
              © Wardiere Inc. All Rights Reserved 2023 <br />
              <a href="#">Terms & Conditions</a>
            </footer>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
