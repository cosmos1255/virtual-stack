import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./App.css";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import LargeLogo from "./virtualstacklogo.png";
import Home from "./Home.js";
import Button from "react-bootstrap/button";

class LandingPage extends Component {
  render() {
    return (
      <div class="login-header">
        <div>
          <img class="large-logo" src={LargeLogo} alt="LargeLogo" />
        </div>
        <br />
        <div>
          <div class="landing-buttons">
            <NavLink to="/signin" className="btn btn-primary btn-block" exact>
              Login
            </NavLink>
            <br />
            <NavLink to="/signup" className="btn btn-success btn-block" exact>
              Sign Up
            </NavLink>
            <br />
            <NavLink to="/home" className="btn btn-success btn-block" exact>
              Home
            </NavLink>
          </div>
          <Switch>
            <Route path="/signin" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default LandingPage;
