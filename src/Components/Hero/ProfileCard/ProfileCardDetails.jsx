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
      <Card className="bg-light hero-cards align-items-center">
        <Card.Title
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Card.Img
            src={user ? user.photoURL : brand_logo}
            alt="Profile Photo"
            style={{
              marginTop: "1rem",
              border: " 8px solid #b01c86b5",
            }}
          />

          {user ? user.displayName : "Profile Name"}
        </Card.Title>
        <div style={{ color: "#B01C87" }}>
          <div style={{ fontWeight: "500", fontSize: "2rem" }}>300</div>
          Points Balance
        </div>
        <Card.Body className="pta-card">
          <div>Points to Award</div>
          300
        </Card.Body>
        <Card.Footer
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            minWidth: "100%",
          }}
          className="bg-secondary text-white"
          as={NavLink}
          to="/myteam"
        >
          <BsInfoCircleFill />
          <span>My team</span>
        </Card.Footer>
      </Card>
    </div>
  );
}
