import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const handleRej = () => {
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
      if (isUpdate) {
        // Update API call
      } else {
        axios
          .post(`https://66afdb096a693a95b5375747.mockapi.io/DummyData`, {
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
    }
  };

  return (
    <div>
      <Form className="register-form">
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          {nameError && <div className="text-danger">{nameError}</div>}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="text-danger">{passwordError}</div>}
        </Form.Field>
        <Button onClick={handleRej} type="submit">
          {isUpdate ? "Update" : "Submit"}
        </Button>
      </Form>
    </div>
  );
}
