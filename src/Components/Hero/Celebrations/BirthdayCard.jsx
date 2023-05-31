import React from "react";
import { Card } from "react-bootstrap";
import brand_logo from "../../../assets/brand_logo.jpg";

const BirthdayCard = () => {
  return (
    <Card className="flex-row">
      <Card.Img src={brand_logo} className="w-25 h-25  rounded-full" />
      <Card.Body className="m-0 p-0">
        <Card.Text
          className="m-0"
          style={{ fontSize: "1rem", lineHeight: "1rem", fontWeight: "500" }}
        >
          Name
        </Card.Text>
        <Card.Text
          className="text-muted m-0"
          style={{ fontSize: "0.8rem", lineHeight: "0.8rem" }}
        >
          DOB
        </Card.Text>
        <Card.Text
          className="m-0"
          style={{
            fontSize: "0.8rem",
            lineHeight: "0.8rem",
            fontWeight: "400",
          }}
        >
          Celebration Message
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BirthdayCard;
