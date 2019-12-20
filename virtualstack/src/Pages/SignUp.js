import React, { Component } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import MaskedFormControl from "react-bootstrap-maskedinput";
import Button from "react-bootstrap/Button";
import SmallLogo from "./smallVSlogo.png";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      occupation: "",
      name: "",
      phoneNumber: "",
      email: "",
      address: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const {
      username,
      password,
      name,
      occupation,
      address,
      phoneNumber,
      email
    } = this.state;
    localStorage.setItem("name", name);
    localStorage.setItem("occupation", occupation);
    localStorage.setItem("address", address);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);
    signup(
      username,
      password,
      formatBody(name, occupation, address, phoneNumber, email)
    );
  };


  onChange = e => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {
      username,
      password,
      name,
      occupation,
      address,
      phoneNumber,
      email
    } = this.state;
    return (
      <div class="login-header">
        <div>
          <img class="small-logo" src={SmallLogo} alt="SmallLogo" />
        </div>
        <br />
        <Form>
          <Form.Group controlId="occupation">
            <Form.Label>Occupation:</Form.Label>
            <Form.Control
              placeholder="Company or school"
              name="occupation"
              value={occupation}
              onChange={this.onChange}
              required
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control
                name="name"
                value={name}
                onChange={this.onChange}
                placeholder="John Smith"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="phoneNumber">
              <Form.Label>Phone:</Form.Label>
              <MaskedFormControl
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.onChange}
                type="tel"
                mask="(111) 111-1111"
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
              placeholder="john.smith@email.com"
              required
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGroupUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                name="username"
                value={username}
                onChange={this.onChange}
                type="username"
                placeholder="New username"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGroupPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="New password"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="address">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              name="address"
              value={address}
              onChange={this.onChange}
              placeholder="1234 Main St"
              required
            />
          </Form.Group>

          <Button variant="dark" onClick={this.onSubmit} type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

function signup(username, password, body) {
  fetch("https://virtual-stack.herokuapp.com/api/signup", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa(username + ":" + password),
      "Content-Type": "application/json"
    },
    body: JSON.parse(body)
  })
    .then(response => {
      return response.text();
    })
    .then(value => {
      localStorage.setItem("username", username)
      localStorage.setItem("password", password)
      window.location.href = "/home";
      //console.log(value);
      console.log(JSON.parse(body));
    })
    .catch(error => {
      console.log(error.message);
    });
}

function formatBody(name, occupation, address, phoneNumber, email) {
  // var body =
  //   "{ \"name\": \"" +
  //   name +
  //   "\"," +
  //   " \"address\": \"" +
  //   address +
  //   "\"," +
  //   " \"phoneNumber\": \"" +
  //   phoneNumber +
  //   "\"," +
  //   " \"email\": \"" +
  //   email +
  //   "\"," +
  //   " \"occupation\": \"" +
  //   occupation +
  //   "\" }";

  const body = {
    name: name,
    address: address,
    phoneNumber: phoneNumber,
    email: email,
    occupation: occupation
  };
  const bodyOBJ = JSON.stringify(body);

  return bodyOBJ;
}

export default SignUp;
