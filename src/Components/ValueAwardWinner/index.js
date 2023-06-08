import React from "react";
import ValueAwardWinnerCard from "./ValueAwardWinnerCard";
import MyTeam from "../MyTeam";
function ValueAwardWinner() {
  return (
    <div style={{ flexBasis: "80%" }}>
      <ValueAwardWinnerCard />
      <MyTeam />
    </div>
  );
}

export default ValueAwardWinner;
