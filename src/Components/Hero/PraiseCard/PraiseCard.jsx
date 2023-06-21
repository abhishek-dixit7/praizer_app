import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import {
  GetUserDetailsByUid,
  fetchUsersData,
} from "../../../_services/UserService";
import Select from "react-select";
import { recogniseValues } from "../../data/constants";

function PraiseCard(props) {
  const [userData, setUserData] = useState({});
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = Object.entries(recogniseValues).map(([value, label]) => ({
    value,
    label,
  }));

  const FetchUserData = async () => {
    try {
      var data = await GetUserDetailsByUid(props.uid);
      var datas = await fetchUsersData();
      setUsersData(datas);
      setUserData(data);
      setLoading(false); // Set loading to false when data is retrieved
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards text-start">
        <Card.Header as={"h5"}>Praise</Card.Header>
        <Card.Body>
          <Form style={{ display: "grid", gap: "1rem" }}>
            <Form.Group>
              <Form.Label style={{ fontSize: "1.5rem", fontWeight: "400" }}>
                Praizing:
              </Form.Label>
              <Form.Control
                type="input"
                defaultValue={
                  userData && userData?.firstName + " " + userData?.lastName
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label style={{ fontSize: "2rem", fontWeight: "500" }}>
                Give a reason for this praize
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label
                style={{
                  fontSize: "2rem",
                  fontWeight: "500",
                  marginBlock: "1rem",
                }}
              >
                Choose a recognition type
              </Form.Label>
              <Select
                options={options}
                placeholder="Please select any one"
                // value={selected}
                // onChange={(e) => navigateHandler(e)}
                // isMulti //Use this to select multiple options
                // isSearchable //makes the select bar searchable
                noOptionsMessage={() => "No such user found"}
                styles={{
                  option: (base) => ({
                    ...base,
                    color: "black",
                  }),
                }}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

export default PraiseCard;
