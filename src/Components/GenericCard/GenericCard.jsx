import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { VscGift } from "react-icons/vsc";
import { TiHeartFullOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { cardValues } from "../data/constants";
function GenericCard(props) {
  const [like, setLike] = useState("Like");
  console.log(cardValues);
  return (
    <div>
      <Card>
        <Card.Header>
          <VscGift />
        </Card.Header>
        <Card.Body>
          <h3>{props.value === "1" ? cardValues[0] : cardValues[1]}</h3>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="light"
            onClick={() => setLike(like === "Like" ? "Unlike" : "Like")}
          >
            {like}
            {like === "Like" ? <TiHeartOutline /> : <TiHeartFullOutline />}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default GenericCard;
