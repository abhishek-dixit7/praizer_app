import React from "react";
import { Card } from "react-bootstrap";

function ProfileCard() {
  return (
    <div>
      <Card style={{ width: "10rem", height: "20rem" }}>
        <Card.Header>Profile</Card.Header>
        <Card.Img
          variant="top"
          src="https://pixabay.com/photos/link-parts-url-browser-short-5219567/"
          alt="Profile Photo"
        />
        <Card.Body></Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default ProfileCard;
