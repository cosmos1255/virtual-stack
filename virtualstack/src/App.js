import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Pages/App.css";
import Login from "./Pages/Login.js";
import SignUp from "./Pages/SignUp.js";
import ViewCards from "./Pages/ViewCards.js";
import Home from "./Pages/Home.js";
import EditCard from "./Pages/EditCard.js";
import LoginInfo from "./Pages/EditLoginInfo.js";
import LargeLogo from "./Pages/virtualstacklogo.png";

export default function App() {
  return (
    <div class="login-header">
      <div id="large-logo">
        <img src={LargeLogo} alt="LargeLogo" />
      </div>
      <Router>
        <div>
          <nav>
            <Link to="/signin">Login</Link>
            <br />
            <Link to="/signup">SignUp</Link>
            <br />
            <Link to="/view_contacts">ViewCards</Link>
            <br />
            <Link to="/home">Home</Link>
            <br />
            <Link to="/edit_personal_card">EditCard</Link>
            <br />
            <Link to="/edit_login_info">LoginInfo</Link>
          </nav>
          <Switch>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/view_contacts">
              <ViewCards />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/edit_personal_card">
              <EditCard />
            </Route>
            <Route path="/edit_login_info">
              <LoginInfo />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
