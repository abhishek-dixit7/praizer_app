import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import RecogniseCard from "../../RCard/RecogniseCard";
// import { sampleCardValues } from "../../data/constants";
import GenericCard from "../../GenericCard/GenericCard";
import { fetchUsersData } from "../../../_services/UserService";
function DashboardCard() {
  const [usersData, setUsersData] = useState();

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserData = async () => {
    try {
      //console.log("Fetch method call", fetchUsersData());
      const data = await fetchUsersData();
      setUsersData(() => data);
      console.log(usersData);
    } catch (error) {}
  };
  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header as={"h5"}>Dashboard</Card.Header>
        <Card.Body>
          <GenericCard />
          {usersData != null &&
            usersData.map((item) => {
              return <RecogniseCard key={item.id} uid={item?.uid} />;
            })}
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default DashboardCard;
