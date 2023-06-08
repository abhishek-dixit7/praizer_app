import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const AccountSetting = () => {
  const [formData, setFormData] = useState({
    DOB: "1999-09-28",
    DOJ: "2023-05-12",
  });

  return (
    <div style={{ flexBasis: "80%", textAlign: "start" }}>
      <Card className="hero-cards  ">
        <Form className="mx-5 mt-2">
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              value={formData.DOB}
              onChange={(e) =>
                setFormData({ ...formData, DOB: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicDOJ">
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control
              type="date"
              value={formData.DOJ}
              onChange={(e) =>
                setFormData({ ...formData, DOJ: e.target.value })
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
