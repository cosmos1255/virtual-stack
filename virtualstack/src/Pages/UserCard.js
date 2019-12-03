import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

class UserCard extends Component {
	render() {
		const email = localStorage.getItem("email");
		const phone = localStorage.getItem("phoneNumber");
		const address = localStorage.getItem("address");
		const occupation = localStorage.getItem("occupation");
		const name = localStorage.getItem("name");
		return (
			<Card border="dark" style={{ width: '30rem', height: '15rem' }}>
				<Card.Body>
					<Card.Title className="text-center">{name}</Card.Title>
					<Card.Subtitle className="text-center">{occupation}</Card.Subtitle>
					<br />
					<br />
					<br />
					<Row>
						<Col>
							<Card.Text className="text-left">
								{phone}
							</Card.Text>
							<Card.Text className="text-left">
								{email}
							</Card.Text>
						</Col>
						<Col>
							<Card.Text className="text-right">
								{address}
							</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card >
		);
	}
}

// function userCard() {

// }

export default UserCard;