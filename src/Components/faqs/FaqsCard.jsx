import React from "react";
import { Card } from "react-bootstrap";
function FaqsCard() {
  return (
    <div className="mt-1 mx-1">
      <Card style={{ minHeight: "20rem" }}>
        <Card.Header as={"h5"}>FAQs</Card.Header>
        <Card.Body></Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}
export default FaqsCard;
