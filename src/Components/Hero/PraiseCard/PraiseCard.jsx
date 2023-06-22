import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import {
  GetUserDetailsByUid,
  fetchUsersData,
} from "../../../_services/UserService";
import Select from "react-select";
import { recogniseValues } from "../../data/constants";
import FormPreview from "./FormPreview";
import LoadingSpinner from "../../subComponents/LoadingSpinner";

function PraiseCard(props) {
  const [userData, setUserData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="mt-5">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards text-start">
        <Card.Header as={"h5"}>Praise</Card.Header>
        <Card.Body>
          <Form style={{ display: "grid", gap: "1rem" }}>
            <Form.Group>
              <Form.Label
                style={{
                  fontSize: "2rem",
                  fontWeight: "500",
                  marginBlock: "1rem",
                }}
              >
                Praizing
              </Form.Label>
              <Form.Control
                type="input"
                defaultValue={
                  userData && userData?.firstName + " " + userData?.lastName
                }
                disabled
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

            <Form.Group>
              <Form.Label
                style={{
                  fontSize: "2rem",
                  fontWeight: "500",
                  marginBlock: "1rem",
                }}
              >
                Reward Points
              </Form.Label>
              <Slider maxValue={300} />
            </Form.Group>

            <div
              style={{
                marginInline: "1rem",
                display: "flex",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <button
                type="button"
                onClick={togglePreview}
                className="pink-button"
              >
                Preview
              </button>

              {showPreview && (
                <FormPreview formData={userData} onClose={togglePreview} />
              )}

              <button
                type="submit"
                onClick={togglePreview}
                className="pink-button"
              >
                Post
              </button>
            </div>
          </Form>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}

const Slider = ({ maxValue }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };

  const sliderStyle = {
    minWidth: "100%",
    height: "8px",
    borderRadius: "4px",
    appearance: "none",
    outline: "none",
    background: "var(--clr-primary-400)",
  };

  return (
    <div>
      <input
        style={sliderStyle}
        type="range"
        min={0}
        max={maxValue}
        value={value}
        onChange={handleChange}
      />
      <span>{value}</span>
    </div>
  );
};

export default PraiseCard;
