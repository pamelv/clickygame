import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Nav(props) {
  return (
    <div>
      <Row>
        <Col className="header">
          <h1>CLICKY GAME</h1>
          <h5>
            Click on an image to earn points, but don't click on any more than
            once!
          </h5>
        </Col>
      </Row>
      <Row className="score">
        <Col sm={6}>
          <h4>Score: {props.score}</h4>
        </Col>
        <Col sm={6}>
          <h4>Highes Score: {props.highestScore}</h4>
        </Col>
        <Col>
          <h6>{props.message}</h6>
        </Col>
      </Row>
    </div>
  );
}

export default Nav;
