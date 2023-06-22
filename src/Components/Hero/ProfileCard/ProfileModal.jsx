import React, { useState } from "react";
import { Card } from "react-bootstrap";

function ProfileModal(props) {
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);
  const handleShow = () => {
    props.handleModal();
  };
  return (
    <div className="form-preview-overlay">
      <Card>
        <Card.Header as={"h5"}>User Profile</Card.Header>
        <Card.Body>
          <p>Name: {props?.name}</p>
          <p>Email: {props?.email}</p>
          <p>Phone: {props?.phone}</p>
        </Card.Body>
        <Card.Footer>
          <button className="close-button pink-button" onClick={handleShow}>
            Close
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProfileModal;
