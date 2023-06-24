import { Card } from "react-bootstrap";
import LikeButton from "../subComponents/LikeButton";
import ProfileModal from "../Hero/ProfileCard/ProfileModal";
import { NavLink } from "react-router-dom";
import { GetUserDetailsByUid } from "../../_services/UserService";
import { useEffect, useState } from "react";

export const RecogniseSkeleton = ({ details, isPreview }) => {
  // console.log("details", details);
  const [praizer, setPraizer] = useState({});
  const [userPraized, setUserPraized] = useState({});
  const [title, setTitle] = useState(false);
  const [uid, setUid] = useState();

  const showTitle = () => {
    setTitle(!title);
  };

  //praizer data fetch

  const GetPraizer = async () => {
    GetUserDetailsByUid(details.praizerUid)
      .then((x) => {
        setPraizer(x);
        // console.log(x);
      })
      .catch((err) => console.log(err));
  };

  //userPraized data fetch

  const GetUserPraized = async () => {
    GetUserDetailsByUid(details.userPraisedUid)
      .then((x) => {
        setUserPraized(x);
        // console.log(x);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetPraizer();
    GetUserPraized();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            src={userPraized?.photoUrl}
            onClick={() => {
              setUid(userPraized.uid);
              showTitle();
            }}
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
            {details.recognitionType}
          </span>
        </Card.Header>

        <Card.Body>
          <span>
            Praised for <b>'{details.recognitionType}'</b>
          </span>
          <p></p>
          Praised by
          <NavLink
            variant="light"
            onClick={() => {
              setUid(praizer.uid);
              showTitle();
            }}
          >
            <p> {`${praizer?.firstName} ${praizer?.lastName}`}</p>
          </NavLink>
          <p>{details?.praizeText}</p>
          {!isPreview && title && (
            <ProfileModal
              handleModal={showTitle ? showTitle : null}
              uid={uid}
            />
          )}
        </Card.Body>
        <Card.Footer className="100vh">
          <LikeButton disabled={isPreview} />
        </Card.Footer>
      </Card>
      <br />
    </div>
  );
};
