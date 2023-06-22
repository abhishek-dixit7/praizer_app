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
            style={{
              borderRadius: "2rem",
              maxWidth: "70%",
              boxShadow:
                "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
            }}
          />
        </Card.Header>

        <Card.Body
          style={{ fontSize: "1rem", textAlign: "start" }}
          className="profileModal"
        >
          <div>
            First Name: <span>{details?.firstName}</span>
          </div>
          <div>
            Last Name: <span>{details?.lastName}</span>
          </div>
          <div>
            Email: <span>{details?.email}</span>
          </div>
          <div>
            Date of Birth: <span>{details?.dateOfBirth}</span>
          </div>
          <div>
            Date of Joining: <span>{details?.dateOfJoining}</span>
          </div>
          <div>
            Reporting Manager/RM: <span>{details?.manager}</span>
          </div>
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
