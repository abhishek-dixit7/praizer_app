import React from "react";
import { Card } from "react-bootstrap";

function MyTeam() {
  return (
    <div>
      <Card style={{ position: "relative", width: "25rem" }}>
        <Card.Header>
          <span className="flex flex-col">My Team</span>
        </Card.Header>
      </Card>
    </div>
  );
}

export default MyTeam;
