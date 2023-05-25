import React from "react";
import { Route, Routes } from "react-router-dom";
import FAQs from "../faqs";
import Celebrations from "../Celebrations";
import DownloadMobile from "../DownloadMobile";
import ValueAwardWinner from "../ValueAwardWinner";
import RedeemPoints from "../RedeemPoints";
function RouteComponents() {
  return (
    <>
      <Routes>
        <Route to="/" />
        <Route to="/home" />
        <Route to="/faqs" element={<FAQs />} exact />
        <Route to="/celebrations" element={<Celebrations />} exact />
        <Route to="/DownloadMobile" Component={DownloadMobile} />
        <Route to="/Valueawardwinner" element={<ValueAwardWinner />} />
        <Route to="/redeempoint" element={<RedeemPoints />} />
      </Routes>
    </>
  );
}

export default RouteComponents;
