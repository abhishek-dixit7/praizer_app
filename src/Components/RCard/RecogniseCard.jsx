import React from "react";

import { RecogniseSkeleton } from "./RecogniseSkeleton";
function RecogniseCard({ userData }) {
  return <RecogniseSkeleton details={userData} isPreview={false} />;
}

export default RecogniseCard;
