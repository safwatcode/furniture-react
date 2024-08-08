import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logoo from "./assets/f8722f22cc772e27a75a1e13395a3cdb.jpg";

export default function Loginform() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [emailError, setErrorEmail] = useState(" ");
  const [passwordError, setErrorPassword] = useState(" ");

  const handleLogin = () => {
    let valid = true;
    if (!email.includes("@") || !email.includes(".com")) {
      setErrorEmail("Invalid email address");
      valid = false;
    } else {
      setErrorEmail("");
    }

    if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long");
      valid = false;
    } else {
      setErrorPassword("");
    }

    if (valid) {
      navigate("/about");
    }
  };

  const handleRejester = () => {
    navigate("/rejester");
  };

  return (
    <div>
      <section className="h-100 gradient-form" style={{ backgroundColor: "" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src={logoo} style={{ width: 185 }} alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1">
                          We are Smart Furniture
                        </h4>
                      </div>
                      <form>
                        <div
                          data-mdb-input-init=""
                          className="form-outline mb-4"
                        >
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {emailError && (
                            <div className="text-danger">{emailError}</div>
                          )}
                        </div>
                        <div
                          data-mdb-input-init=""
                          className="form-outline mb-4"
                        >
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {passwordError && (
                            <div className="text-danger">{passwordError}</div>
                          )}
                        </div>
                        <div className="text-center  m-1  pe-3 ">
                          <button
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-primary btn-lg btn-block fa-lg gradient-custom-2 mb-3 "
                            type="button"
                            onClick={handleLogin}
                          >
                            Log in
                          </button>
                        </div>
                        <Link
                          to={"/forgot"}
                          className="text-muted text-center d-flex align-items-center justify-content-center "
                        >
                          Forgot password?
                        </Link>
                        <div className="d-flex align-items-center justify-content-center pb-4 mt-3">
                          <p className="mb-0  me-2">Don't have an account?</p>
                          <Button
                            variant="outline-success"
                            type="button"
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn  "
                            onClick={handleRejester}
                          >
                            Create new
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Over Hundreds of products with highest variety of
                        selection are waiting for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
