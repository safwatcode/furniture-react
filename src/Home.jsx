/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import img1 from "./assets/e9e264209af614995c117ff7ae9077cc.jpg";
import img2 from "./assets/685d36e8fdacbbd5d79f508f58788bb4.jpg";
import ContactUs from "./ContactUs";

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

      <section className="py-3 py-md-5 py-xl-8" id="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
              <h1 className="fs-5 mb-2 text-bold text-uppercase text-center">
                About
              </h1>
              <h3 className="mb-4">
                Our journey began with a dream of redefining how the world
                perceives design.
              </h3>
              <button
                type="button"
                className="btn btn-lg mb-3 mb-md-4 mb-xl-5"
                to="/products"
                style={{
                  transition: "0.3s",
                  backgroundColor: "#6b7c65",
                  border: "none",
                  color: "#fff",
                  backgroundImage:
                    "linear-gradient(45deg, #6b7c65, #7a8f74, #7ea570, #7aac68, #70ad5a)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundImage =
                    "linear-gradient(45deg, #5a6b55, #6a7f64, #6e9460, #6a9b58, #608d4a)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundImage =
                    "linear-gradient(45deg, #6b7c65, #7a8f74, #7ea570, #7aac68, #70ad5a)";
                }}
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="ab gy-4 gy-lg-0">
          <div className="">
            <article>
              <div
                className="card border-0 shadow-lg"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <img
                  className="card-img-top img-fluid"
                  loading="lazy"
                  src={img2}
                  alt="Our Vision"
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body bg-white p-4">
                  <div className="entry-header mb-3">
                    <h2 className="card-title entry-title h4 mb-0">
                      <a className="link-dark text-decoration-none" href="#!">
                        Our Vision
                      </a>
                    </h2>
                  </div>
                  <p className="card-text entry-summary text-secondary mb-3">
                    From sleek modernism to timeless elegance, we infuse every
                    creation with a touch of our artistic ingenuity. As a design
                    agency, great design can shape perceptions, inspire action,
                    and leave an indelible mark on the world.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="">
            <article>
              <div
                className="card border-0 shadow-lg"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <img
                  className="card-img-top img-fluid"
                  loading="lazy"
                  src={img1}
                  alt="Our Approach"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body bg-white p-4">
                  <div className="entry-header mb-3">
                    <h2 className="card-title entry-title h4 mb-0">
                      <a className="link-dark text-decoration-none" href="#!">
                        Our Approach
                      </a>
                    </h2>
                  </div>
                  <p className="card-text entry-summary text-secondary mb-3">
                    Welcome to our design agency, where creativity knows no
                    bounds and innovation takes center stage. We are a team of
                    dedicated designers, strategists, and visionaries with a
                    passion for transforming ideas into captivating visuals.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="">
            <article>
              <div
                className="card border-0 shadow-lg"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <img
                  className="card-img-top img-fluid"
                  loading="lazy"
                  src="/images/r-architecture-TRCJ-87Yoh0-unsplash-26bc30ad721b4e398b699e75cb7020f4.jpg"
                  alt="Our Approach"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body bg-white p-4">
                  <div className="entry-header mb-3">
                    <h2 className="card-title entry-title h4 mb-0">
                      <a className="link-dark text-decoration-none" href="#!">
                        Our Message
                      </a>
                    </h2>
                  </div>
                  <p className="card-text entry-summary text-secondary mb-3">
                    We believe that a home is more than just a place to live -
                    it's a reflection of who you are. That's why we're dedicated
                    to helping you create a space that's not only beautiful, but
                    also functional and meaningful.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>


      <ContactUs />
    </div>
  );
}

export default Home;
