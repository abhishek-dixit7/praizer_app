/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { fetchUsersData } from "../../../_services/UserService";
const RecognizeSearchCard = () => {
  const search = useRef();
  const [userData, setUserData] = useState([]);
  function handleSearchBox() {
    console.log(search.current.value);
    const newData = userData.filter(function (item) {
      return (
        item.firstName
          .toLowerCase()
          .includes(search.current.value.toLowerCase()) ||
        item.lastName
          .toLowerCase()
          .includes(search.current.value.toLowerCase()) ||
        item.email.toLowerCase().includes(search.current.value.toLowerCase())
      );
    });
    console.log("Data at user", newData);
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    try {
      const data = await fetchUsersData();
      console.log(data);
      setUserData(data);
    } catch (error) {}
  };
  return (
    <div className="mt-1 mx-1 text-start">
      <Card style={{ backgroundColor: "#B01C87", color: "white" }}>
        <Card.Header as={"h5"}>Recognize</Card.Header>
        <Card.Body style={{ position: "relative" }}>
          <Form.Control
            type="text"
            ref={search}
            placeholder="Search with Name or Email"
            onChange={handleSearchBox}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecognizeSearchCard;
