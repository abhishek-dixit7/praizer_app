import React from "react";
import { Card } from "react-bootstrap";
import { VscGift } from "react-icons/vsc";

import { cardValues } from "../data/constants";
import Rcard from "../RCard";
import LikeButton from "../subComponents/Buttons/LikeButton";
function GenericCard(props) {
  console.log(cardValues);
  return (
    <div>
      <Card>
        <Card.Header>
          <VscGift />
        </Card.Header>
        <Card.Body>
          <h3>{props.value === "1" ? cardValues[0] : cardValues[1]}</h3>
          <p>Gerard Butler</p>
        </Card.Body>
        <Card.Footer>
          <LikeButton />
        </Card.Footer>
      </Card>
      <Rcard />
    </div>
  );
}

export default GenericCard;
