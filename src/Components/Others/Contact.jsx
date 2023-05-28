import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function Contact() {
  return (
    <div className="mt-1 mx-1">
      <Card style={{ position: "absolute", width: "42.3rem", height: "20rem" }}>
        <Card.Header as={"h5"}>Contact us </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Row>
              <Col>
                <Form.Label>Name:</Form.Label>
              </Col>

              <Col>
                <Form.Control type="text"></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Email:</Form.Label>
              </Col>
              <Col>
                <Form.Control type="email"></Form.Control>
                <Form.Text style={{ color: "green" }}>
                  Your email will be kept confidential
                </Form.Text>
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col></Col>
            <Col>
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}
export default Contact;
