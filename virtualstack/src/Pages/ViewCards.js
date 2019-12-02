import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import { Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import PageNav from "./PageNav.js";
class ViewCards extends Component {
  render() {
    return (
      <div class="normal-page-format">
        <PageNav />
        <div>
          <h1>Your Contacts</h1>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row lg={2}>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>YOOO</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>YOOO</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default ViewCards;
