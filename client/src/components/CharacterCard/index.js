import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function FriendCard(props) {
  return (
    <Col sm={4}>
      <Card
        style={{
          height: "150px",
          width: "200px",
          marginBottom: "50px",
          backgroundColor: "transparent",
        }}
        onClick={() => props.handleClick(props.id)}
      >
        <Card.Body style={{ backgroundColor: "#FF5042" }}>
          <Card.Text
            style={{
              marginTop: "-10px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {props.name}
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src={props.image}
          alt={props.name}
          style={{ height: "100%", objectFit: "fill" }}
        />
      </Card>
    </Col>
  );
}

export default FriendCard;
