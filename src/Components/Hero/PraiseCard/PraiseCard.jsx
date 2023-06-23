import React, { useContext, useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { GetUserDetailsByUid } from "../../../_services/UserService";
import Select from "react-select";
import { recogniseValues } from "../../data/constants";

import LoadingSpinner from "../../subComponents/LoadingSpinner";
import RecognizePreview from "./RecognisePreview";
import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { createPraise } from "../../../_services/PraiseService";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context/Context";

function PraiseCard(props) {
  const [currentUser] = useAuthState(auth);
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const { showToast } = useContext(Context);

  const navigate = useNavigate();

  //Form Handles
  const [formData, setFormData] = useState({
    userName: "",
    photoUrl: "",
    userPraisedUid: "",
    praiserUid: "",
    praizeText: "",
    recognitionType: "",
    rewardPoints: 0,
  });

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    //console.log(formData);

    const request = {
      userPraisedUid: formData.userPraisedUid,
      praiserUid: formData.praiserUid,
      praizeText: formData.praizeText,
      recognitionType: formData.recognitionType.label,
      rewardPoints: parseInt(formData.rewardPoints),
    };

    console.log(JSON.stringify(request));

    createPraise(JSON.stringify(request)).then((x) => {
      if (x.status === 200) {
        navigate("/");
        showToast("You have Praized Successfully!", "success");
      } else {
        showToast("Praized Failed!", "error");
      }
    });

    //console.log(response);
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      recognitionType: selectedOption,
    }));
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

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
      setUserData(data);
      setLoading(false);
      setFormData((prevFormData) => ({
        ...prevFormData,
        userName: `${data.firstName} ${data.lastName}`,
        userPraisedUid: data.uid,
        photoUrl: data.photoUrl,
        praiserUid: currentUser.uid,
      })); // Set loading to false when data is retrieved
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
          <Form
            style={{ display: "grid", gap: "1rem" }}
            onSubmit={handleSubmit}
          >
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
                value={formData?.userName}
                name="userName"
                onChange={handleChange}
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
                required
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                }}
                value={formData?.praizeText}
                onChange={handleChange}
                name="praizeText"
                maxLength={200}
                placeholder="Maximum 200 characters"
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
                required
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
                value={formData?.recognitionType}
                onChange={handleSelectChange}
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
              <div>
                <input
                  style={{
                    minWidth: "100%",
                    height: "8px",
                    borderRadius: "4px",
                    appearance: "none",
                    outline: "none",
                    background: "var(--clr-primary-400)",
                  }}
                  type="range"
                  min={0}
                  max={100}
                  value={formData?.rewardPoints}
                  onChange={handleChange}
                  name="rewardPoints"
                />
                <span>{formData?.rewardPoints}</span>
              </div>
              {/* <Slider
                maxValue={300}
                value={formData.rewardPoints}
                onChange={handleChange}
              /> */}
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
                <RecognizePreview formData={formData} onClose={togglePreview} />
              )}

              <button type="submit" className="pink-button">
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

export default PraiseCard;
