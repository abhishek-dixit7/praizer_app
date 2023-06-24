import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import RecogniseCard from "../../RCard/RecogniseCard";
// import { sampleCardValues } from "../../data/constants";
import GenericCard from "../../GenericCard/GenericCard";
import {
  getAnniverseries,
  getBirthdays,
  getPraises,
} from "../../../_services/PraiseService";
import LoadingSpinner from "../../subComponents/LoadingSpinner";
function DashboardCard() {
  const [praizes, setPraizes] = useState();
  const [birthdays, setBirthdays] = useState();
  const [anniversaries, setAnniversaries] = useState();

  const fetchUserData = async () => {
    //console.log("Fetch method call", fetchUsersData());
    getPraises()
      .then((x) => {
        setPraizes(x);
        // console.log(x);
      })
      .catch((err) => console.log(err));
  };

  const fetchBirthdays = async () => {
    try {
      //console.log("Fetch method call", fetchUsersData());
      const data = await getBirthdays();
      setBirthdays(() => data);
      // console.log("Birthdays", data);
    } catch (error) {}
  };

  const fetchAnniversaries = async () => {
    try {
      //console.log("Fetch method call", fetchUsersData());
      const data = await getAnniverseries();
      setAnniversaries(() => data);
      // console.log("Anniversaries", data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserData();
    fetchBirthdays();
    fetchAnniversaries();
    // setPraizes(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header as={"h5"}>Dashboard</Card.Header>
        <Card.Body>
          {/* Birthdays */}
          {birthdays ? (
            birthdays?.map((item, index) => (
              <GenericCard key={index} uid={item?.uid} value={1} />
            ))
          ) : (
            <LoadingSpinner />
          )}
          {/* Annivarsaries */}
          {anniversaries ? (
            anniversaries?.map((item, index) => (
              <GenericCard key={index} uid={item?.uid} value={2} />
            ))
          ) : (
            <LoadingSpinner />
          )}
          {/* Praizes */}
          {praizes ? (
            praizes.map((item) => {
              return <RecogniseCard key={item.id} userData={item} />;
            })
          ) : (
            <LoadingSpinner />
          )}
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default DashboardCard;
