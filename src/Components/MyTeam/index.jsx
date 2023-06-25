import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { fetchUsersData } from "../../_services/UserService";

function MyTeam() {
  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div style={{ flexBasis: "80%" }}>
      <div className="mt-1 mx-1">
        <Card style={{ minHeight: "20rem" }}>
          <Card.Header as={"h5"}>Team </Card.Header>
          <Card.Body>
            <h1>Coming Soon!!!!!</h1>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default MyTeam;
