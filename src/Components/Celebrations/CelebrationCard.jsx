import React from "react";
import { Card } from "react-bootstrap";

export default function CelebrationCard() {
  return (
    <div className="mt-1 mx-1">
      <Card style={{ position: "absolute", width: "42.3rem", height: "20rem" }}>
        <Card.Header as={"h5"}>Celebrations</Card.Header>
        <Card.Body></Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}
