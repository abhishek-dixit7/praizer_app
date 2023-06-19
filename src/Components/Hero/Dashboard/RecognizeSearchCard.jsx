import React, { useRef } from "react";
import { Card, Form } from "react-bootstrap";

const RecognizeSearchCard = () => {
  const search = useRef();
  return (
    <div className="mt-1 mx-1 text-start">
      <Card style={{ backgroundColor: "#B01C87", color: "white" }}>
        <Card.Header as={"h5"}>Recognize</Card.Header>
        <Card.Body style={{ position: "relative" }}>
          <Form.Control
            type="text"
            ref={search}
            placeholder="Search with Name or Email"
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecognizeSearchCard;
