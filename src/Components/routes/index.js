import React from "react";
import { Route, Routes } from "react-router-dom";
import FAQs from "../faqs";
import Celebrations from "../Celebrations";
import DownloadMobile from "../DownloadMobile";
import ValueAwardWinner from "../ValueAwardWinner";
import RedeemPoints from "../RedeemPoints";
import Dashboard from "../Dashboard";
function RouteComponents() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} exact={true} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/faqs" element={<FAQs />} exact />
      <Route path="/celebrations" element={<Celebrations />} exact />
      <Route path="/DownloadMobile" Component={DownloadMobile} />
      <Route path="/Valueawardwinner" element={<ValueAwardWinner />} />
      <Route path="/redeempoint" element={<RedeemPoints />} />
    </Routes>
  );
}

export default RouteComponents;
