import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { GetUserDetailsByUid } from "../../../_services/UserService";

import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AccountSetting = () => {
  const [user, loading] = useAuthState(auth);

  const [formData, setFormData] = useState({
    dateOfBirth: "1999-09-17",
    dateOfJoining: "2023-05-12",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const data = await GetUserDetailsByUid(user.uid);
      setFormData({
        ...formData,
        dateOfBirth: data.dateOfBirth,
        dateOfJoining: data.dateOfJoining,
      });
    } catch (error) {}
  };

  return (
    <div style={{ flexBasis: "80%", textAlign: "start" }}>
      <Card className="hero-cards  ">
        <Form className="mx-5 mt-2">
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicDOJ">
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control
              type="date"
              value={formData.dateOfJoining}
              onChange={(e) =>
                setFormData({ ...formData, dateOfJoining: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
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
