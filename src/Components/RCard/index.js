import React from "react";
import { Card, Stack } from "react-bootstrap";
export default function Rcard() {
  return (
    <Stack className="col-md-5 mx-auto">
      <Card className="bg-secondary bo text-white">
        <Card.Header>Header</Card.Header>
        <Card.Title> Title</Card.Title>
        <Card body>Body</Card>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    </Stack>
  );
}
