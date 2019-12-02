import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import LargeLogo from "./virtualstacklogo.png";

class LandingPage extends Component {
  render() {
    return (
      <div class="login-header">
        <div>
          <img class="large-logo" src={LargeLogo} alt="LargeLogo" />
        </div>
        <br />
        <div class="landing-buttons">
          <Link to="/signin" className="btn btn-primary btn-block" exact>
            Login
          </Link>
          <br />
          <Link to="/signup" className="btn btn-success btn-block" exact>
            Sign Up
          </Link>
          <br />
          <Link to="/home" className="btn btn-success btn-block" exact>
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
