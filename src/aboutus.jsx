import React from "react";
import img1 from "./assets/e9e264209af614995c117ff7ae9077cc.jpg";
import img2 from "./assets/685d36e8fdacbbd5d79f508f58788bb4.jpg";

export default function Aboutus() {
  return (
    <div>
      <>
        <section className="py-3 py-md-5 py-xl-8">
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
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-lg-0">
              <div className="col-12 col-lg-6">
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
                        height: "auto",
                        maxHeight: "400px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body bg-white p-4">
                      <div className="entry-header mb-3">
                        <h2 className="card-title entry-title h4 mb-0">
                          <a
                            className="link-dark text-decoration-none"
                            href="#!"
                          >
                            Our Vision
                          </a>
                        </h2>
                      </div>
                      <p className="card-text entry-summary text-secondary mb-3">
                        From sleek modernism to timeless elegance, we infuse
                        every creation with a touch of our artistic ingenuity.
                        As a design agency, great design can shape perceptions,
                        inspire action, and leave an indelible mark on the
                        world.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-lg-6">
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
                          <a
                            className="link-dark text-decoration-none"
                            href="#!"
                          >
                            Our Approach
                          </a>
                        </h2>
                      </div>
                      <p className="card-text entry-summary text-secondary mb-3">
                        Welcome to our design agency, where creativity knows no
                        bounds and innovation takes center stage. We are a team
                        of dedicated designers, strategists, and visionaries
                        with a passion for transforming ideas into captivating
                        visuals.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

