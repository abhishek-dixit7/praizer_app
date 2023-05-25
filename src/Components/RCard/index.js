import React from "react";
import { Card, Stack } from "react-bootstrap";
export default function Rcard() {
  return (
    <Stack className="col-md-9 mx-auto">
      <Card className="bg-success text-white" >
        <Card.Img src="" />
        <Card.Title> Title</Card.Title>
        <Card.Body>Body</Card.Body>
        <Card.Footer className="100vh">Footer</Card.Footer>
      </Card>
    </Stack>
  );
}
