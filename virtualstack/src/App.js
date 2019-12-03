import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Pages/App.css";
import LandingPage from "./Pages/LandingPage.js";
import Login from "./Pages/Login.js";
import SignUp from "./Pages/SignUp.js";
import PageNav from "./Pages/PageNav.js";
import ViewCards from "./Pages/ViewCards.js";
import Home from "./Pages/Home.js";
import EditCard from "./Pages/EditCard.js";
import LoginInfo from "./Pages/EditLoginInfo.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/signin" component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/pagenav" component={PageNav}></Route>
        <Route path="/view_cards" component={ViewCards}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/edit_login_info" component={LoginInfo}></Route>
        <Route path="/edit_your_card" component={EditCard}></Route>
      </Switch>
    </Router>
  );
};

export default App;
