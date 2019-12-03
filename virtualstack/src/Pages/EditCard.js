import React, { Component } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import MaskedFormControl from "react-bootstrap-maskedinput";
import Button from "react-bootstrap/button";
import PageNav from "./PageNav.js";

class EditCard extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      occupation: "",
      name: "",
      phoneNumber: "",
      email: "",
      address: ""
    };
  }
  changeInfo() {
    const {
      name,
      occupation,
      address,
      phoneNumber,
      email
    } = this.state;
    localStorage.setItem("name", name);
    localStorage.setItem("occupation", occupation);
    localStorage.setItem("address", address);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);
    window.location.href = "/home"
  }
  onChange = e => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      name,
      occupation,
      address,
      phoneNumber,
      email
    } = this.state;
    return (
      <div>
        <PageNav />
        <div class="page-header-text">
          <h2>Edit Your Card Info</h2>
        </div>
        <div class="cards-view-page">
          <Form>
            <Form.Group controlId="occupation">
              <Form.Label>Occupation:</Form.Label>
              <Form.Control
                placeholder="Company or school"
                name="occupation"
                value={occupation}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="name">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  placeholder="John Smith"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="phoneNumber">
                <Form.Label>Phone:</Form.Label>
                <MaskedFormControl
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={this.onChange}
                  type="tel"
                  mask="(111) 111-1111"
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                name="email"
                value={email}
                onChange={this.onChange}
                type="email"
                placeholder="john.smith@email.com"
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                name="address"
                value={address}
                onChange={this.onChange}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Button variant="dark" onClick={this.changeInfo} type="submit">
              Save Changes
          </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default EditCard;
