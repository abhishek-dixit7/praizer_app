import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
//import { recogniseValues } from "../data/constants";
import LikeButton from "../subComponents/LikeButton";
import ProfileModal from "../Hero/ProfileCard/ProfileModal";
import { NavLink } from "react-router-dom";
import { GetUserDetailsByUid } from "../../_services/UserService";
function RecogniseCard({ uid }) {
  const [title, setTitle] = useState(false);
  const [details, setDetails] = useState();
  const showTitle = () => {
    setTitle(!title);
  };
  const FetchUserData = async () => {
    try {
      var data = await GetUserDetailsByUid(uid);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header as={NavLink} onClick={showTitle}>
          Header{" "}
        </Card.Header>
        <Card.Img src="" />
        <Card.Body>
          <span>Praised for </span>
          <p></p>
          Praised by
          <NavLink variant="light" onClick={showTitle}>
            <p> {details?.firstName}</p>
          </NavLink>
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
