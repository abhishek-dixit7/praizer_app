import React from "react";
import ProfileCard from ".";
import { CardGroup } from "react-bootstrap";

const ProfileCardContainer = ({ children }) => {
  return (
    <CardGroup>
      <ProfileCard />
      {children}
    </CardGroup>
  );
};

export default ProfileCardContainer;
