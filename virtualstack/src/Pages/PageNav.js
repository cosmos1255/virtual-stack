import React, { Component } from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/button";

class PageNav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">Virtual Stack</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/view_cards">View Cards</Nav.Link>
            <Nav.Link href="/edit_your_card">Edit Your Card</Nav.Link>
            <Nav.Link href="/edit_login_info">Edit Login Info</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default PageNav;
