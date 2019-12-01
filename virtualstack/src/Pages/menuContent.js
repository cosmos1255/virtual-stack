import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import ViewCards from "./ViewCards.js";
import EditCard from "./EditCard.js";
import LoginInfo from "./EditLoginInfo.js";

import "./menuContent.css";

class MenuContent extends Component {
  constructor(props) {
    super(props);

    this.items = [];
  }

  render() {
    return (
      <div className="menu">
        <div>
          <Router className="menu-items">
            <div>
              <nav>
                <NavLink
                  to="/view_contacts"
                  className="btn btn-dark btn-block"
                  onClick={this.props.closeCallback}
                  target="_blank"
                >
                  View All Contacts
                </NavLink>
                <NavLink
                  to="/edit_personal_card"
                  className="btn btn-dark btn-block"
                  onClick={this.props.closeCallback}
                  target="_blank"
                >
                  Edit Your Card Info
                </NavLink>
                <NavLink
                  to="/edit_login_info"
                  className="btn btn-dark btn-block"
                  onClick={this.props.closeCallback}
                  target="_blank"
                >
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
            </div>
          </Router>
        </div>

        <p className="hint">
          Click outside the menu to close it, or swipe it closed on touch device
        </p>
      </div>
    );
  }
}

MenuContent.propTypes = {
  closeCallback: PropTypes.func.isRequired
};

export default MenuContent;
