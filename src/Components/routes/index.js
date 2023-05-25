import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQs from "../faqs";
import Celebrations from "../Celebrations";
import DownloadMobile from "../DownloadMobile";
import ValueAwardWinner from "../ValueAwardWinner";
import RedeemPoints from "../RedeemPoints";
import Dashboard from "../Dashboard";
function RouteComponents() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Dashboard />} exact={true} />
        <Route to="/home" element={<Dashboard />} />
        <Route to="/faqs" element={<FAQs />} exact />
        <Route to="/celebrations" element={<Celebrations />} exact />
        <Route to="/DownloadMobile" Component={DownloadMobile} />
        <Route to="/Valueawardwinner" element={<ValueAwardWinner />} />
        <Route to="/redeempoint" element={<RedeemPoints />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponents;
