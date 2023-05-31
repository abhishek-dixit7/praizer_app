import React from "react";
import { Card } from "react-bootstrap";
import brand_logo from "../../../assets/brand_logo.jpg";
import { NavLink } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
function ProfileCard() {
  return (
    <div style={{ flexBasis: "20%" }}>
      <Card className="bg-secondary text-white hero-cards align-items-center">
        <Card.Img
          src={brand_logo}
          alt="Profile Photo"
          className="w-50 rounded-circle mt-4"
        />
        <Card.Title className="mt-4">Profile Name</Card.Title>
        <Card.Body></Card.Body>
        <Card.Footer
          as={NavLink}
          to="/myteam"
          className=" bg-secondary text-white"
        >
          <BsInfoCircleFill className="mx-2" />
          <span>My team</span>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProfileCard;
