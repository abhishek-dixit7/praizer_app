import React from "react";
import { Card } from "react-bootstrap";
import { RecogniseSkeleton } from "../../RCard/RecogniseCard";

const RecognizePreview = ({ formData, onClose }) => {
  return (
    <div className="form-preview-overlay">
      <Card style={{ minWidth: "60%", textAlign: "center" }}>
        <Card.Body>
          <RecogniseSkeleton details={formData} likeDisabled={true} />
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

export default RecognizePreview;
