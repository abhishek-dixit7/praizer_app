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
import AccountSetting from "../Hero/ProfileCard/AccountSetting";
import ProfileCardContainer from "../Hero/ProfileCard/ProfileCardContainer";
import Praise from "../Hero/PraiseCard/index";
function RouteComponents() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProfileCardContainer>
            <Dashboard />
          </ProfileCardContainer>
        }
        exact
      />
      <Route
        path="/home"
        element={
          <ProfileCardContainer>
            <Dashboard />
          </ProfileCardContainer>
        }
      />
      <Route
        path="/faqs"
        element={
          <ProfileCardContainer>
            <FAQs />
          </ProfileCardContainer>
        }
        exact
      />
      <Route
        path="/celebrations"
        element={
          <ProfileCardContainer>
            <Celebrations />
          </ProfileCardContainer>
        }
        exact
      />
      <Route path="/DownloadMobile" Component={DownloadMobile} />
      <Route
        path="/Valueawardwinner"
        element={
          <ProfileCardContainer>
            <ValueAwardWinner />
          </ProfileCardContainer>
        }
      />
      <Route
        path="/redeempoint"
        element={
          <ProfileCardContainer>
            <RedeemPoints />
          </ProfileCardContainer>
        }
      />
      <Route
        path="/myteam"
        element={
          <ProfileCardContainer>
            <MyTeam />
          </ProfileCardContainer>
        }
      />
      <Route
        path="/contact"
        element={
          <ProfileCardContainer>
            <Contact />
          </ProfileCardContainer>
        }
      />
      <Route
        path="/praise"
        element={
          <ProfileCardContainer>
            <Praise />
          </ProfileCardContainer>
        }
      />
      <Route path="/accountsetting" element={<AccountSetting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouteComponents;
