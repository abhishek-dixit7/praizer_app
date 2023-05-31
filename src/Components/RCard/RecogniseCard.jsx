import React from "react";
import { Card, Button } from "react-bootstrap";
import { recogniseValues } from "../data/constants";
import LikeButton from "../subComponents/LikeButton";
function RecogniseCard(props) {
  const reValues = recogniseValues;
  const params = { ...props.values };
  console.log(params);
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Img src="" />
        <Card.Title>
          <Button variant="light">Title</Button>
        </Card.Title>
        <Card.Body>
          <span>Praised for {reValues[params.name]}</span>
          <p>{params.comment}</p>
          <p>Tom Holland</p>
          <span>Praised by {params.from}</span>
        </Card.Body>
        <Card.Footer className="100vh">
          <LikeButton />
        </Card.Footer>
      </Card>
    </div>
  );
}

export default RecogniseCard;
