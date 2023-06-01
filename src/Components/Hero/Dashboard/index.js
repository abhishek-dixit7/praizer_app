import React from "react";
import DashboardCard from "./DashboardCard";
import Celebrations from "../Celebrations";

function Dashboard() {
  return (
    <>
      <div style={{ flexBasis: "60%" }}>
        <DashboardCard />
      </div>
      <Celebrations value="1" />
    </>
  );
}

export default Dashboard;
