import React from "react";
import { Card } from "react-bootstrap";
import brand_logo from "../../assets/brand_logo.jpg";
import { NavLink } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
function ProfileCard() {
  return (
    <div className="mt-1" style={{ flexBasis: "20%" }}>
      <Card style={{ height: "20rem" }} className="bg-secondary text-white">
        <Card.Img
          src={brand_logo}
          alt="Profile Photo"
          className="rounded-circle mt-3 "
        />
        <Card.Title className="mt-2">Profile Name</Card.Title>
        <Card.Body></Card.Body>
        <Card.Footer
          as={NavLink}
          to="/myteam"
          className="bg-secondary text-white"
        >
          <BsInfoCircleFill className="mx-2" />
          <span>My team</span>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProfileCard;
