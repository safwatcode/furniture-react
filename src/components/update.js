import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://66afdb096a693a95b5375747.mockapi.io/DummyData/${id}`)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setPassword(response.data.password);
      });
  }, [id]);

  const handleUpdate = () => {
    let valid = true;
    if (name === "") {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }
    if (email === "") {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (valid) {
      axios
        .put(`https://66afdb096a693a95b5375747.mockapi.io/DummyData/${id}`, {
          name,
          email,
          password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <Form className="update-form">
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="text-danger">{nameError}</div>}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="text-danger">{passwordError}</div>}
        </Form.Field>
        <Button onClick={handleUpdate} type="submit">
          Update
        </Button>
        <Link to="/read">
          <Button>Back to List</Button>
        </Link>
      </Form>
    </div>
  );
}
