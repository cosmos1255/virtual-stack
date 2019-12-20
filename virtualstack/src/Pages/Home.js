import React, { Component } from "react";
import "./App.css";
import PageNav from "./PageNav.js";
import { Link } from "react-router-dom";
import UserCard from "./UserCard.js";

class Home extends Component {

  render() {

    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password")
    userCard(username, password)

    return (
      <div>
        <PageNav />
        <div>
          <div class="page-header-text">
            <h1>Welcome to Virtual Stack</h1>
          </div>
          <div class="cards-page">
            <h3>Your virtual card ...</h3>
            <Link to="/edit_your_card" className="btn"><UserCard /></Link>
            <br />
          </div>
        </div>
      </div >
    );
  }
}

function userCard(username, password) {

  fetch("https://virtual-stack.herokuapp.com/api/user/card", {
    method: "GET",
    headers: {
      "Authorization": "Basic " + btoa(username + ":" + password),
      "Content-Type": "application/json"
    }
  })
    .then(response => {

      return response.text();

    })
    .then(value => {
      console.log(JSON.parse(value).name)
      localStorage.setItem("name", JSON.parse(value).name)
      localStorage.setItem("occupation", JSON.parse(value).occupation)
      localStorage.setItem("phoneNumber", JSON.parse(value).phoneNumber)
      localStorage.setItem("email", JSON.parse(value).email)
      localStorage.setItem("address", JSON.parse(value).address)
      return value;
    })
    .catch(error => {
      console.log(error.message);
    });
}

export default Home;
