import React from "react";
import CelebrationCard from "./CelebrationCard";

function Celebrations(props) {
  return (
    <div
      style={props.value === "1" ? { flexBasis: "20%" } : { flexBasis: "80%" }}
    >
      <CelebrationCard />
    </div>
  );
}

export default Celebrations;
