import React from "react";
import { Card } from "react-bootstrap";

const FormPreview = ({ formData, onClose }) => {
  return (
    <div className="form-preview-overlay">
      <Card>
        <Card.Header as={"h5"}>Form Preview</Card.Header>
        <Card.Body>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
        </Card.Body>
        <Card.Footer>
          <button className="close-button pink-button" onClick={onClose}>
            Close
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default FormPreview;
