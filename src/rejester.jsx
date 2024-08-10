/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import sampleImage from "./assets/1d9ac3aa96050420f6782fd1738290d4.jpg";
import axios from "axios";
import Read from "../src/components/read";
// import "./App.css"

export default function Rejester() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setErrorEmail] = useState("");
  const [passwordError, setErrorPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState("");

  useEffect(() => {
    axios
      .get("https://66afdb096a693a95b5375747.mockapi.io/DummyData")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleRej = () => {
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
      if (isUpdate) {
        axios
          .put(
            `https://66afdb096a693a95b5375747.mockapi.io/DummyData/${updateId}`,
            {
              name,
              email,
              password,
            }
          )
          .then((response) => {
            console.log(response);
            navigate("/home");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        axios
          .post("https://66afdb096a693a95b5375747.mockapi.io/DummyData", {
            name,
            email,
            password,
          })
          .then((response) => {
            console.log(response);
            navigate("/home");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };

  const handleUpdate = (id) => {
    setIsUpdate(true);
    setUpdateId(id);
    const user = users.find((user) => user.id === id);
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://66afdb096a693a95b5375747.mockapi.io/DummyData/${id}`)
      .then((response) => {
        console.log(response);
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <section
        className="h-100 h-custom bg-light"
        style={{ backgroundColor: "" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src={sampleImage}
                  className="w-100 h-50"
                  style={{
                    borderTopLeftRadius: ".3rem",
                    borderTopRightRadius: ".3rem",
                  }}
                  alt="Sample photo"
                />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Registration Info
                  </h3>
                  <form className="px-md-2">
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1q"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <div className="form-outline mb-4">
                        <div
                          data-mdb-input-init=""
                          className="form-outline datepicker"
                        >
                          <input
                            type="text"
                            className="form-control"
                            id="exampleDatepicker1"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {emailError && (
                            <div className="text-danger">
                              {emailError && (
                                <div className="text-danger">{emailError}</div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4 pb-2 pb-md-0 mb-md-2">
                      <div className="form-outline mb-1">
                        <div data-mdb-input-init="" className="form-outline">
                          <input
                            type="password"
                            id="form3Example1w"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {passwordError && (
                            <div className="text-danger">{passwordError}</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn sub-btn btn-primary btn-lg btn-block fa-lg gradient-custom-2 mb-3"
                      onClick={handleRej}
                    >
                      {isUpdate ? "Update" : "Submit"}
                    </button>
                    <div className="sub-text">
                      <p>
                        Already have an account ?
                        <Link to={"/login"} className="ps-2">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Read /> */}
      <section className="users-read">
        <h2>Users List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>
                {user.name} <br /> {user.email}
              </p>
              <button onClick={() => handleUpdate(user.id)}>Update</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
