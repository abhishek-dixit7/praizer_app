import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { GetTeamMembers } from "../../_services/CommonService";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingSpinner from "../subComponents/LoadingSpinner";
import BirthdayCard from "../Hero/Celebrations/BirthdayCard";
function MyTeam() {
  const [teamData, setTeamData] = useState();
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchTeamDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const DateFormater = (dob) => {
    // Create a Date object using the DOB string
    const dateObj = new Date(dob);

    // Format the date in a readable format
    const formattedDOB = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDOB;
  };
  const fetchTeamDetails = async () => {
    if (user) {
      GetTeamMembers(user?.uid).then((res) => {
        console.log("Res", res);
        setTeamData(res);
      });
      // setTeamData(data);
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="mt-5">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div style={{ flexBasis: "80%" }}>
      <div className="mt-1 mx-1">
        <Card style={{ minHeight: "20rem" }}>
          <Card.Header as={"h5"}>Team </Card.Header>
          <Card.Body>
            {teamData &&
              teamData.map((item) => (
                <BirthdayCard
                  key={item.id}
                  img={item.photoUrl}
                  name={item.firstName + " " + item.lastName}
                  dob={DateFormater(item.dateOfBirth)}
                  message={""}
                >
                  {item.firstName}
                </BirthdayCard>
              ))}
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default MyTeam;
