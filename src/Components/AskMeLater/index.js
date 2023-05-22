import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";

export default function AskMeLater() {
  const [show, setShow] = useState(true);
  function handleShow() {
    setShow(!show);
  }
  return (
    <div>
      <Modal show={show} onHide={handleShow}>
        <ModalHeader>
          <Button onClick={handleShow}>Close</Button>
        </ModalHeader>
        <ModalBody>Body</ModalBody>
      </Modal>
    </div>
  );
}
