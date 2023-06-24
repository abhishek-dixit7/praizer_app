import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import brand_logo from "../../../assets/brand_logo.jpg";
import { NavLink } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../utils/firebase";
import { GetUserDetailsByUid } from "../../../_services/UserService";

export default function ProfileCardDetails() {
  const [currentUser] = useAuthState(auth);
  const [user, setUser] = useState({});

  const GetUser = async () => {
    GetUserDetailsByUid(currentUser.uid)
      .then((x) => {
        setUser(x);
        // console.log(x);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            src={user ? user.photoUrl : brand_logo}
            alt="Profile Photo"
            style={{
              marginTop: "1rem",
              border: " 8px solid #b01c86b5",
            }}
          />

          {user ? `${user.firstName} ${user.lastName}` : "Profile Name"}
        </Card.Title>
        <div style={{ color: "var(--clr-primary-400)" }}>
          <div style={{ fontWeight: "500", fontSize: "2rem" }}>
            {user?.pointBalance}
          </div>
          Points Balance
        </div>
        <Card.Body className="pta-card">
          <div>Points to Award</div>
          {user?.pointToAward}
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
