import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Nav(props) {
  return (
    <Row>
      <Col className="header">
        <h1>CLICKY GAME</h1>
        <h4>Score: {props.score}</h4>
        <h4>Highes Score: {props.highestScore}</h4>
        <small>{props.message}</small>
      </Col>
    </Row>
  );
}

export default Nav;
