import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import SmallLogo from "./smallVSlogo.png";
// import FormControl from "react-bootstrap/FormControl";
// import FormCheck from "react-bootstrap/FormCheck";

// fetch("https://virtual-stack.herokuapp.com/api/signin", {
//   method: "POST",
//   headers: { username: "username", password: "password" }
// });

class Login extends Component {
  render() {
    return (
      <div class="login-header">
        <div>
          <img class="small-logo" src={SmallLogo} alt="SmallLogo" />
        </div>
        <br />
        <Form>
          <Form.Group controlId="formGroupUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
