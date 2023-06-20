import React from "react";
import { Card } from "react-bootstrap";
function PraiseCard(props) {
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header as={"h5"}>Praise</Card.Header>
        <Card.Body>{props.uid}</Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default PraiseCard;
