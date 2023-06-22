import React from "react";
import Celebrations from "../Celebrations";
import PraiseCard from "./PraiseCard";
import { useLocation } from "react-router-dom";

function Praise() {
  const location = useLocation();
  return (
    <>
      <div style={{ flexBasis: "60%" }}>
        <PraiseCard uid={location?.state?.id} />
      </div>
      <Celebrations value="1" />
    </>
  );
}

export default Praise;
