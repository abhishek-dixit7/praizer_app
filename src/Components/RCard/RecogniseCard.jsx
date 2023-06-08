import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
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
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Img src="" />
        <Card.Title>
          <Row>
            <Col lg="2">
              <Button variant="light" onClick={showTitle}>
                Title
              </Button>
            </Col>
          </Row>
        </Card.Title>
        <Card.Body>
          <span>Praised for {reValues[params.name]}</span>
          <p>{params.comment}</p>
          <p>Tom Holland</p>
          <span>
            Praised by
            <Button variant="light" onClick={showTitle}>
              {params.from}
            </Button>
          </span>
          {title ? (
            <ProfileModal
              handleModal={showTitle}
              name={"Jasmine Fernandez"}
              url="https://www.fernand.com"
            />
          ) : null}
        </Card.Body>
        <Card.Footer className="100vh">
          <LikeButton />
        </Card.Footer>
      </Card>
      <br />
    </div>
  );
}
export default RecogniseCard;
