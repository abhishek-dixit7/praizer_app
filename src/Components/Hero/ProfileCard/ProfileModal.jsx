import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ProfileModal(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    props.handleModal();
  };
  return (
    <div>
      <Modal show={!show} onHide={handleShow}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          This is the profile Modal. Here we will put the details of the profile
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProfileModal;
