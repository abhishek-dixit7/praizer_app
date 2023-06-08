import React from "react";
import { Card } from "react-bootstrap";
import brand_logo from "../../../assets/brand_logo.jpg";
import { NavLink } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../utils/firebase";

export default function ProfileCardDetails() {
  // eslint-disable-next-line no-unused-vars
  const [user, loading] = useAuthState(auth);

  return (
    <div style={{ flexBasis: "20%" }}>
      <Card className="bg-secondary text-white hero-cards align-items-center">
        <Card.Img
          src={user ? user.photoURL : brand_logo}
          alt="Profile Photo"
          className="w-50 rounded-circle mt-4"
        />
        <Card.Title className="mt-4">
          {user ? user.displayName : "Profile Name"}
        </Card.Title>
        <Card.Body>
          <Card className="bg-light text-black">
            <h3>300</h3>
            <h5>Points Balance</h5>
            <hr />
            <h5>Points to Award</h5>
            <h3>300</h3>
          </Card>
        </Card.Body>
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
