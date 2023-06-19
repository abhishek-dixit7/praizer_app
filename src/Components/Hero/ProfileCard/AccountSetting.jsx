import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { GetUserDetailsByUid } from "../../../_services/UserService";

import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AccountSetting = () => {
  const [user] = useAuthState(auth);

  const dateOfBirth = useRef();
  const dateOfJoining = useRef();
  const photoUrl = useRef();

  const existingDateOfBirth = "1999-09-17";
  const existingDateOfJoining = "2023-05-12";

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (user) {
      fetchUserData(user.uid);
    }
  }, [user]);

  const fetchUserData = async (uid) => {
    try {
      const data = await GetUserDetailsByUid(uid);
      setUserData(data);
    } catch (error) {}
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      dob: dateOfBirth.current?.value,
      doj: dateOfJoining.current?.value,
      photo: photoUrl.current?.value,
    };

    console.log(data);
  };

  return (
    <div style={{ textAlign: "start" }}>
      <Card className="hero-cards">
        <Form
          className="mx-5 mb-4 mt-2 d-flex flex-column"
          onSubmit={HandleFormSubmit}
        >
          <Form.Group
            className="mb-3 d-flex justify-content-center align-items-center"
            style={{ gap: "2rem" }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                photoUrl.current.click();
              }}
            >
              <img
                src={user.photoURL}
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
              // onChange={handleImageChange}
              accept="image/*"
              ref={photoUrl}
              style={{ display: "none" }}
            />
            <Form.Label style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              {userData.firstName + " " + userData.lastName}
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              ref={dateOfBirth}
              defaultValue={existingDateOfBirth}
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicDOJ">
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control
              type="date"
              ref={dateOfJoining}
              defaultValue={existingDateOfJoining}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AccountSetting;
