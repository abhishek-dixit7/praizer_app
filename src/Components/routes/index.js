import React from "react";
import { Route, Routes } from "react-router-dom";
import FAQs from "../faqs";
import Celebrations from "../Hero/Celebrations";
import DownloadMobile from "../DownloadMobile";
import ValueAwardWinner from "../ValueAwardWinner";
import RedeemPoints from "../RedeemPoints";
import Dashboard from "../Hero/Dashboard";
import NotFound from "../Others/NotFound";
import MyTeam from "../MyTeam";
import Contact from "../Others/Contact";
function RouteComponents() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} exact />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/faqs" element={<FAQs />} exact />
      <Route path="/celebrations" element={<Celebrations />} exact />
      <Route path="/DownloadMobile" Component={DownloadMobile} />
      <Route path="/Valueawardwinner" element={<ValueAwardWinner />} />
      <Route path="/redeempoint" element={<RedeemPoints />} />
      <Route path="/myteam" element={<MyTeam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouteComponents;
