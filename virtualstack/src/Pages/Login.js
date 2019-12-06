import React, { Component } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SmallLogo from "./smallVSlogo.png";
// import Home from "./Home.js";
// import FormControl from "react-bootstrap/FormControl";
// import FormCheck from "react-bootstrap/FormCheck";

// fetch("https://virtual-stack.herokuapp.com/api/signin", {
//   method: "POST",
//   headers: { username: "username", password: "password" }
// });

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = e => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const { username, password } = this.state;
    signin(username, password);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div class="login-header">
        <div>
          <img class="small-logo" src={SmallLogo} alt="SmallLogo" />
        </div>
        <br />
        <Form>
          <Form.Group controlId="formGroupUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="username"
              name="username"
              value={username}
              onChange={this.onChange}
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="dark" onClick={this.onSubmit} type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

function signin(username, password) {
  fetch("https://virtual-stack.herokuapp.com/api/signin", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa(username + ":" + password),
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.text();
    })
    .then(value => {
      localStorage.setItem("username", username)
      localStorage.setItem("password", password)
      window.location.href = "/home";
      console.log(value);
    })
    .catch(error => {
      console.log(error.message);
    });
}

export default Login;
