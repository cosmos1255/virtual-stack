import React, { Component } from "react";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import "./Pages/App.css";
import LandingPage from "./Pages/LandingPage.js";
import ViewCards from "./Pages/ViewCards.js";
import Home from "./Pages/Home.js";
import EditCard from "./Pages/EditCard.js";
import LoginInfo from "./Pages/EditLoginInfo.js";
import Login from "./Pages/Login.js";
import SignUp from "./Pages/SignUp.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/">
            <LandingPage />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
