import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { recogniseValues } from "../data/constants";
import LikeButton from "../subComponents/LikeButton";
import ProfileModal from "../Hero/ProfileCard/ProfileModal";
function RecogniseCard(props) {
  const reValues = recogniseValues;
  const params = { ...props.values };
  const [title, setTitle] = useState(false);
  const showTitle = () => {
    setTitle(!title);
  };
  console.log(params);
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Img src="" />
        <Card.Title>
          <Button variant="light" onClick={showTitle}>
            Title
          </Button>
        </Card.Title>
        <Card.Body>
          <span>Praised for {reValues[params.name]}</span>
          <p>{params.comment}</p>
          <p>Tom Holland</p>
          <span>Praised by {params.from}</span>
          {title ? <ProfileModal handleModal={showTitle} /> : null}
        </Card.Body>
        <Card.Footer className="100vh">
          <LikeButton />
        </Card.Footer>
      </Card>
    </div>
  );
}

export default RecogniseCard;
