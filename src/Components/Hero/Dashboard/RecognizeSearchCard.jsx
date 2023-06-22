import React, { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { fetchUsersData } from "../../../_services/UserService";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const RecognizeSearchCard = () => {
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState();
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  const navigateHandler = (e) => {
    navigate("/praise", { state: { id: e[0].value } });
  };

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

  return (
    <div className="mt-1 mx-1 text-start">
      <Card
        style={{ backgroundColor: "var(--clr-primary-400)", color: "white" }}
      >
        <Card.Header as={"h5"}>Recognize</Card.Header>
        <Card.Body style={{ position: "relative" }}>
          <Select
            options={userData}
            placeholder="Enter name or email"
            value={selected}
            onChange={(e) => navigateHandler(e)}
            isMulti //Use this to select multiple options
            isSearchable //makes the select bar searchable
            noOptionsMessage={() => "No such user found"}
            styles={{
              option: (base) => ({
                ...base,
                color: "black",
              }),
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecognizeSearchCard;
