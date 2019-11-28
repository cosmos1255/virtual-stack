import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ViewCards from "./ViewCards.js";
import EditCard from "./EditCard.js";
import LoginInfo from "./EditLoginInfo.js";

import "./menuContent.css";

class MenuContent extends Component {
  constructor(props) {
    super(props);

    this.items = [];
    for (let i = 1; i <= 5; i++) {
      this.items.push(i);
    }
  }

  render() {
    return (
      <div className="menu">
        <div className="menu-items">
          <Router>
            <div>
              <nav>
                <Link to="/view_contacts">ViewCards</Link>
                <br />
                <Link to="/edit_personal_card">EditCard</Link>
                <br />
                <Link to="/edit_login_info">LoginInfo</Link>
              </nav>
              <Switch>
                <Route path="/view_contacts">
                  <ViewCards />
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
