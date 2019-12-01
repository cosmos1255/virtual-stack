import React, { Component } from "react";
import InputMask from "react-input-mask";
// import {
//     BrowserRouter as Link
// } from "react-router-dom";
import "./App.css";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import MaskedFormControl from "react-bootstrap-maskedinput";
// import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/button";
import SmallLogo from "./smallVSlogo.png";
// fetch("/api/signup", {
//   method: "POST",
//   body:
//     "'username', 'password', 'name', 'occupation', 'address', 'phoneNumber', 'email'"
// });

class SignUp extends Component {
  render() {
    return (
      <div class="login-header">
        <div>
          <img class="small-logo" src={SmallLogo} alt="SmallLogo" />
        </div>
        <br />
        <Form>
          <Form.Group controlId="occupation">
            <Form.Label>Occupation:</Form.Label>
            <Form.Control placeholder="Company or school" required />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="full_name">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control placeholder="John Smith" required />
            </Form.Group>
            <Form.Group as={Col} controlId="phoneNumber">
              <Form.Label>Phone:</Form.Label>
              <MaskedFormControl
                type="tel"
                name="phoneNumber"
                mask="(111) 111-1111"
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="john.smith@email.com"
              required
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="username"
                placeholder="New username"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="New password"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="address">
            <Form.Label>Address:</Form.Label>
            <Form.Control placeholder="1234 Main St" required />
          </Form.Group>

          <Button variant="dark" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
