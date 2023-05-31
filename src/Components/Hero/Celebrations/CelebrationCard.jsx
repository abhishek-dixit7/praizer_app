import React from "react";
import { Card } from "react-bootstrap";
import BirthdayCard from "./BirthdayCard";

export default function CelebrationCard() {
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header as={"h5"}>Celebrations</Card.Header>
        <Card.Body>
          <BirthdayCard />
          <BirthdayCard />
          <BirthdayCard />
          <BirthdayCard />
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}
