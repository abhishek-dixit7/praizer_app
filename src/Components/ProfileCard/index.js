import React from "react";
import { Card } from "react-bootstrap";
import brand_logo from "../../assets/brand_logo.jpg";

function ProfileCard() {
  return (
    <div className="mt-1">
      <Card
        style={{ width: "15rem", height: "20rem" }}
        className="bg-secondary text-white"
      >
        <Card.Img
          src={brand_logo}
          alt="Profile Photo"
          className="rounded-circle mt-3 "
        />
        <Card.Title className="mt-2">Profile Name</Card.Title>
        <Card.Body></Card.Body>
        <Card.Footer className="bg-secondary text-white">
          Made by Gods
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProfileCard;
