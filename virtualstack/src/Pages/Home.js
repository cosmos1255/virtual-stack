import React, { Component } from "react";
import "./App.css";
import PageNav from "./PageNav.js";

class Home extends Component {
  render() {
    return (
      <div class="normal-page-format">
        <PageNav />
        <h1>Home page</h1>
      </div>
    );
  }
}

export default Home;
