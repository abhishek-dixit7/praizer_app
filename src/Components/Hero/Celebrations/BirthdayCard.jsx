import React from "react";
import { Card } from "react-bootstrap";
// import brand_logo from "../../../assets/brand_logo.jpg";

const BirthdayCard = ({ img, name, dob, message }) => {
  return (
    <Card className="flex-row" style={{ padding: "0.35rem" }}>
      <Card.Img
        src={img}
        className="w-25 h-25"
        style={{ borderRadius: "50%" }}
      />
      <Card.Body className="m-0 p-0">
        <Card.Text
          className="m-0"
          style={{ fontSize: "1rem", lineHeight: "1rem", fontWeight: "500" }}
        >
          {name}
        </Card.Text>
        <Card.Text
          className="text-muted m-0"
          style={{ fontSize: "0.8rem", lineHeight: "0.8rem" }}
        >
          {dob}
        </Card.Text>
        <Card.Text
          className="m-0"
          style={{
            fontSize: "0.8rem",
            lineHeight: "0.8rem",
            fontWeight: "400",
          }}
        >
          {message}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BirthdayCard;
