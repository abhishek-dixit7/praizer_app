import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { VscGift } from "react-icons/vsc";
import { cardValues } from "../data/constants";
import LikeButton from "../subComponents/LikeButton";
import { GetUserDetailsByUid } from "../../_services/UserService";
import ProfileModal from "../Hero/ProfileCard/ProfileModal";
function GenericCard(props) {
  const [user, setUser] = useState({});
  const [title, setTitle] = useState(false);

  const showTitle = () => {
    setTitle(!title);
  };

  const GetData = async () => {
    GetUserDetailsByUid(props.uid)
      .then((x) => {
        setUser(x);
        // console.log(x);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Card className="hero-cards">
        <Card.Header>
          <VscGift />
        </Card.Header>
        <Card.Body>
          <h3>{props.value === 1 ? cardValues[0] : cardValues[1]}</h3>
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
          <Card.Img
            src={user?.photoUrl}
            onClick={() => {
              showTitle();
            }}
            style={{
              borderRadius: "10%",
              maxWidth: "5rem",

              boxShadow:
                " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
          />
          {title && (
            <ProfileModal
              handleModal={showTitle ? showTitle : null}
              uid={user?.uid}
            />
          )}
        </Card.Body>
        <Card.Footer>
          <LikeButton />
        </Card.Footer>
      </Card>
      <br />
    </div>
  );
}

export default GenericCard;
