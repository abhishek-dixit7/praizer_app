import React from "react";
import { Card } from "react-bootstrap";
import PraizerLogo from "../../assets/PraizerLogo.png";
import { NavLink } from "react-router-dom";
function Banner() {
  return (
    <div>
      <Card
        className="flex flex-row col-md-9 mx-auto"
        as={NavLink}
        to="/"
        exact
      >
        Praiser
        <Card.Img
          variant="bottom"
          height="80rem"
          src={PraizerLogo}
          alt="Image"
        />
      </Card>
    </div>
  );
}

export default Banner;
