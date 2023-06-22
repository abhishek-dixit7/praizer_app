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
    <RecogniseSkeleton
      details={details}
      showTitle={showTitle}
      title={title}
      likeDisabled={false}
    />
  );
}

export const RecogniseSkeleton = ({
  details,
  showTitle,
  title,
  likeDisabled,
}) => {
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingInline: "1.5rem",
            position: "relative",
          }}
        >
          <Card.Img
            src={details?.photoUrl}
            onClick={showTitle ? showTitle : null}
            style={{
              borderRadius: "10%",
              maxWidth: "5rem",
              position: "absolute",
              boxShadow:
                " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              top: "30%",
              left: "4%",
            }}
          />
          <span
            style={{
              fontSize: "2rem",
              fontWeight: "500",
              color: "var(--clr-primary-400)",
            }}
          >
            Hunger
          </span>
        </Card.Header>
        <Card.Img src="" />
        <Card.Body>
          <span>Praised for </span>
          <p></p>
          Praised by
          <NavLink variant="light" onClick={showTitle ? showTitle : null}>
            <p> {details?.firstName}</p>
          </NavLink>
          {title ? (
            <ProfileModal
              handleModal={showTitle ? showTitle : null}
              uid={details.uid}
            />
          ) : null}
        </Card.Body>
        <Card.Footer className="100vh">
          <LikeButton disabled={likeDisabled} />
        </Card.Footer>
      </Card>
      <br />
    </div>
  );
};

export default RecogniseCard;
