import React from "react";
import { Card } from "react-bootstrap";
function DashboardCard() {
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header as={"h5"}>Dashboard</Card.Header>
        <Card.Body></Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default DashboardCard;