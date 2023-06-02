import React from "react";
import { Card } from "react-bootstrap";

function MyTeam() {
  return (
    <div style={{ flexBasis: "80%" }}>
      <div className="mt-1 mx-1">
        <Card style={{ minHeight: "20rem" }}>
          <Card.Header as={"h5"}>Team </Card.Header>
          <Card.Body></Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default MyTeam;
