import React from "react";
import { Card } from "react-bootstrap";
import { RecogniseSkeleton } from "../../RCard/RecogniseSkeleton";

const RecognizePreview = ({ formData, onClose }) => {
  //validated the data for RecogniseSkeleton
  formData = { ...formData, recognitionType: formData.recognitionType.label };
  console.log("formData", formData);

  return (
    <div className="form-preview-overlay">
      <Card style={{ minWidth: "60%", textAlign: "center" }}>
        <Card.Body>
          <RecogniseSkeleton details={formData} isPreview={true}  />
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
