import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
  Switch
} from "react-router-dom";
import ViewCards from "./ViewCards.js";
import EditCard from "./EditCard.js";
import LoginInfo from "./EditLoginInfo.js";

class PageNav extends Component {
  render() {
    return (
      <div class="login-header">
        <Router>
          <nav className="menu-item">
            <Link to="/view_contacts" className="btn btn-secondary">
              View All Contacts
            </Link>
            <NavLink to="/edit_personal_card" className="btn btn-secondary">
              Edit Your Card Info
            </NavLink>
            <NavLink to="/edit_login_info" className="btn btn-secondary">
              Profile Info
            </NavLink>
          </nav>
          <Switch>
            <Route path="/view_contacts" exact>
              <ViewCards />
            </Route>
            <Route path="/edit_personal_card" exact>
              <EditCard />
            </Route>
            <Route path="/edit_login_info" exact>
              <LoginInfo />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default PageNav;
