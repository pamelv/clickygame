import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer(props) {
  return (
    <Row>
      <Col className="footer">
        <h5>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </h5>
        <small>Clicky Game 2020</small>
      </Col>
    </Row>
  );
}

export default Footer;
