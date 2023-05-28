import React from "react";
import { Card, Stack } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const currentUrl = useLocation();
  return (
    <div>
      <Stack className="col-md-9 mx-auto">
        <Card
          style={{ position: "absolute", width: "42.3rem", height: "20rem" }}
        >
          <Card.Header>
            <h5>{currentUrl.pathname.substring(1)}</h5>
          </Card.Header>
          <Card.Title>Not Found</Card.Title>
          <Card.Body>The page you are looking for is not valid!</Card.Body>
          <Card.Footer>
            <h4>ERROR 404</h4>
          </Card.Footer>
        </Card>
      </Stack>
    </div>
  );
}
