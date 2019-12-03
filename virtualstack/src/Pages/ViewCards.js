import React, { Component } from "react";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import { Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import PageNav from "./PageNav.js";
import UserCard from "./UserCard.js";

class ViewCards extends Component {

  render() {
    return (
      <div>
        <PageNav />
        <div>
          <div class="page-header-text">
            <h1>Your Contacts</h1>
          </div>
          <div class="cards-page">
            <TabContainer id="left-tabs-example" defaultActiveKey="first">
              <Row lg={2}>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <NavItem>
                      <NavLink eventKey="first">{localStorage.getItem("name")}</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <TabContent>
                    <TabPane eventKey="first">
                      <UserCard />
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </TabContainer>
          </div>
        </div>
      </div >
    );
  }
}

export default ViewCards;
