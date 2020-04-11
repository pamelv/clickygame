import React from "react";
import Card from "react-bootstrap/Card";

function FriendCard(props) {
  return (
    <Card onClick={() => props.handleClick(props.id)}>
      <Card.Img variant="bottom" src={props.image} alt={props.name} />
    </Card>
  );
}

export default FriendCard;
