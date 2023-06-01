import React from "react";
import { Card } from "react-bootstrap";
import RecogniseCard from "../../RCard/RecogniseCard";
import { sampleCardValues } from "../../data/constants";
import GenericCard from "../../GenericCard/GenericCard";
function DashboardCard() {
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header as={"h5"}>Dashboard</Card.Header>
        <Card.Body>
          <GenericCard />
          <RecogniseCard values={sampleCardValues} />
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default DashboardCard;
