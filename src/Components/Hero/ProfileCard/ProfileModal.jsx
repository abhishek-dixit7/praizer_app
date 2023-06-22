import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { GetUserDetailsByUid } from "../../../_services/UserService";

function ProfileModal(props) {
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState();
  const handleShow = () => {
    props.handleModal();
  };
  const FetchUserData = async () => {
    try {
      var data = await GetUserDetailsByUid(props?.uid);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="form-preview-overlay">
      <Card>
        <Card.Header as={"h5"}>
          <Card.Img
            src={details?.photoUrl}
            className="w-25 h-25"
            style={{ borderRadius: "50%" }}
          />
        </Card.Header>

        <Card.Body>
          <Row>
            <Col>First Name: {details?.firstName}</Col>
            <Col>Last Name: {details?.lastName}</Col>
          </Row>
          <Row>
            <Col>Email: {details?.email}</Col>
            <Col>Date of Birth: {details?.dateOfBirth}</Col>
          </Row>
          <Row>
            <Col>Date of Joining: {details?.dateOfJoining}</Col>
            <Col>Reporting Manager/RM: {details?.manager}</Col>
          </Row>
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
