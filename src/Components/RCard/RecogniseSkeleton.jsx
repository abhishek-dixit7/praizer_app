import { Card } from "react-bootstrap";
import LikeButton from "../subComponents/LikeButton";
import ProfileModal from "../Hero/ProfileCard/ProfileModal";
import { NavLink } from "react-router-dom";
export const RecogniseSkeleton = ({
  details,
  showTitle,
  title,
  likeDisabled,
}) => {
  console.log("details", details);
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
          <span>
            Praised for <b>'{details?.recognition?.label}'</b>
          </span>
          <p></p>
          Praised by
          <NavLink variant="light" onClick={showTitle ? showTitle : null}>
            <p> {details?.userName}</p>
          </NavLink>
          <p>{details?.praizeText}</p>
          {title ? (
            <ProfileModal
              handleModal={showTitle ? showTitle : null}
              uid={details?.uid}
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
