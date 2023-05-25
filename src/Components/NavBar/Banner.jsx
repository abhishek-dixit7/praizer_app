import React from "react";
import { Card } from "react-bootstrap";
import banner from "../../assets/banner.png";
import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <Card
        className="flex flex-row col-md-9 mx-auto position-relative"
        as={NavLink}
        to="/"
        exact
      >
        <div>
          <span className="banner__text banner__text-left">Praiser</span>
          <span className="banner__text banner__text-right">By Gods</span>
        </div>
        <Card.Img
          variant="bottom"
          height="100"
          width="20"
          style={{ "object-fit": "contain" }}
          src={banner}
          alt="Image"
        />
      </Card>
    </div>
  );
}
