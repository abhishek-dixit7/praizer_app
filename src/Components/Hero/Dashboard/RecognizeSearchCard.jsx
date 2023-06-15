import React, { useRef } from "react";
import { Card, InputGroup, Form } from "react-bootstrap";

const RecognizeSearchCard = () => {
  const search = useRef();

  function SearchUser() {
    console.log(search.current.value);
    var spanElement = document.getElementById("seachinfo");
    spanElement.classList.add("d-none");
  }

  function showSpan() {
    var spanElement = document.getElementById("seachinfo");
    spanElement.classList.toggle("d-none");
  }

  return (
    <div className="mt-1 mx-1 text-start">
      <Card style={{ backgroundColor: "#B01C87", color: "white" }}>
        <Card.Header as={"h5"}>Recognize</Card.Header>
        <Card.Body style={{ position: "relative" }}>
          <Form.Control
            type="text"
            ref={search}
            onChange={SearchUser}
            onClick={showSpan}
          />
          <span
            style={{
              position: "absolute",
              top: "3.45rem",
              left: "1.5rem",
              backgroundColor: "hsl(211, 3%, 96%)",
              color: "black",
              boxShadow: "1.5px 1.5px hsl(227, 7%, 28%)",
              padding: "0.3rem",
              zIndex: "1",
              borderRadius: "0.2rem",
            }}
            id="seachinfo"
            className="d-none"
          >
            Search by Name or Email.
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecognizeSearchCard;
