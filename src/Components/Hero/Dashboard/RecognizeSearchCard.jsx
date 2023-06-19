import React, { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { fetchUsersData } from "../../../_services/UserService";
import Select from "react-select";

const RecognizeSearchCard = () => {
  const [selected, setSelected] = useState();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const data = await fetchUsersData();
      const opt = data.map((item) => {
        return {
          label: `${item.firstName} ${item.lastName} ${item.email}`,
          value: item?.uid,
        };
      });
      setUserData(opt);
    } catch (error) {}
  };
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="mt-1 mx-1 text-start">
      <Card style={{ backgroundColor: "#B01C87", color: "white" }}>
        <Card.Header as={"h5"}>Recognize</Card.Header>
        <Card.Body style={{ position: "relative" }}>
          <Select
            options={userData}
            placeholder="Enter name or email"
            value={selected}
            onChange={setSelected}
            // isMulti //Use this to select multiple options
            isSearchable //makes the select bar searchable
            noOptionsMessage={() => "No such user found"}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecognizeSearchCard;
