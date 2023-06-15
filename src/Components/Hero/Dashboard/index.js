import React from "react";
import DashboardCard from "./DashboardCard";
import Celebrations from "../Celebrations";
import RecognizeSearchCard from "./RecognizeSearchCard";

function Dashboard() {
  return (
    <>
      <div style={{ flexBasis: "60%" }}>
        <RecognizeSearchCard />
        <DashboardCard />
      </div>
      <Celebrations value="1" />
    </>
  );
}

export default Dashboard;
