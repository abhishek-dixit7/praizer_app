import React, { useEffect, useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { GetUserDetailsByUid } from "../../../_services/UserService";

import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AccountSetting = () => {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    dateOfJoining: "",
    email: "",
    firstName: "",
    lastName: "",
    photoUrl: "",
  });
  const [edit, setEdit] = useState(true);
  // const existingDateOfBirth = "1999-09-17";
  // const existingDateOfJoining = "2023-05-12";

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (user) {
      fetchUserData(user?.uid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log("formData", formData);
  };

  const fetchUserData = async (uid) => {
    try {
      const data = await GetUserDetailsByUid(uid);
      setUserData(data);
      setFormData(data);
      console.log("Form data after set", formData);
    } catch (error) {}
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    //console.log(formData);

    const request = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.dateOfBirth,
      dateOfJoining: formData.dateOfJoining,
      email: formData.email,
      photoUrl: formData.photoUrl,
    };
    setEdit(true);
    console.log("Request", request);

    console.log(JSON.stringify(request));
    //console.log(response);
  };
  return (
    <div style={{ textAlign: "start" }}>
      <Card className="hero-cards">
        <Form
          className="mx-5 mb-4 mt-2 d-flex flex-column"
          onSubmit={handleSubmit}
        >
          <Form.Group
            className="mb-3 d-flex justify-content-center align-items-center"
            style={{ gap: "2rem" }}
          >
            <div style={{ cursor: "pointer" }}>
              <img
                src={user?.photoURL}
                alt="Selected"
                style={{
                  marginTop: "10px",
                  maxWidth: "400px",
                  borderRadius: "50%",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              />
            </div>
            <Form.Control
              type="file"
              //onChange={handleImageChange}
              accept="image/*"
              style={{ display: "none" }}
              disabled={edit}
              //value={userData?.photoUrl}
            />
            <Form.Label style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              {userData?.firstName + " " + userData?.lastName}
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              value={formData?.dateOfBirth}
              disabled={edit}
              name="dateOfBirth"
              onChange={() => handleChange()}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={formData?.firstName}
              disabled={edit}
              name="firstName"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={formData?.lastName}
              disabled={edit}
              name="lastName"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicDOJ">
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control
              type="date"
              value={formData?.dateOfJoining}
              disabled={edit}
              name="dateOfJoining"
              onChange={handleChange}
            />
          </Form.Group>
          <Row>
            <Col md={4}>
              <Button
                variant="primary"
                onClick={() => setEdit(!edit)}
                disabled={!edit}
              >
                Edit
              </Button>
            </Col>
            <Col md={8}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default AccountSetting;
