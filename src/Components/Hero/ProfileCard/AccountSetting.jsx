import React, { useEffect, useState, useContext, useRef } from "react";
import { Form, Card } from "react-bootstrap";
import {
  GetUserDetailsByUid,
  UpdateUserDetailsByUid,
} from "../../../_services/UserService";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context/Context";
import LoadingSpinner from "../../subComponents/LoadingSpinner";
import placeholder from "../../../assets/profile_placeholder.jpg";

const AccountSetting = () => {
  const { showToast } = useContext(Context);
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    dateOfJoining: "",
    email: "",
    firstName: "",
    lastName: "",
    photoUrl: "",
    profileFile: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [edit, setEdit] = useState(true);
  const [userData, setUserData] = useState([]);
  const currentUserId = sessionStorage.getItem("currentUserId");

  const fileInputRef = useRef(null);

  const fetchUserData = async (uid) => {
    try {
      const data = await GetUserDetailsByUid(uid);
      setUserData(data);
      setFormData(data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserData(currentUserId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProfilePictureClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      const imageReader = new FileReader();
      imageReader.readAsDataURL(selectedFile);
      imageReader.onloadend = () => {
        setFormData((previousData) => ({
          ...previousData,
          photoUrl: imageReader.result,
        }));
      };
      console.log(selectedFile);
      setFormData((previousData) => ({
        ...previousData,
        profileFile: selectedFile,
      }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formRequest = new FormData();

    // Append each property of the request object to the FormData
    formRequest.append("uid", currentUserId);
    formRequest.append("firstName", formData.firstName);
    formRequest.append("lastName", formData.lastName);
    formRequest.append("dateOfBirth", formData.dateOfBirth);
    formRequest.append("dateOfJoining", formData.dateOfJoining);
    formRequest.append("email", formData.email);
    formRequest.append("photoUrl", userData.photoUrl);
    formRequest.append("profileFile", formData.profileFile);

    //Setting the Edit button to true
    setEdit(true);

    UpdateUserDetailsByUid(formRequest).then((x) => {
      if (x.status === 200) {
        navigate("/");
        showToast("Update Successful!", "success");
      } else {
        showToast("Updation Failed!", "error");
      }
    });
  };

  if (loading) {
    return (
      <div className="mt-5">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div style={{ textAlign: "start" }}>
      <Card className="hero-cards">
        <Form
          className="mx-5 mb-4 mt-2 d-flex flex-column"
          onSubmit={handleSubmit}
        >
          <Form.Group
            className="mb-3 d-flex justify-content-center align-items-center"
            style={{ gap: "2rem" }}
          >
            <div
              className="profile-picture-container"
              onClick={handleProfilePictureClick}
            >
              <img
                src={
                  formData.photoUrl === null ? placeholder : formData.photoUrl
                }
                alt="Profile_Picture"
                style={{
                  marginTop: "10px",
                  width: "120px",
                  borderRadius: "50%",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  objectFit: "cover",
                }}
              />
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              disabled={edit}
            />

            <Form.Label style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              {userData?.firstName + " " + userData?.lastName}
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              value={formData?.dateOfBirth}
              disabled={edit}
              name="dateOfBirth"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={formData?.email}
              disabled={true}
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={formData?.firstName}
              disabled={edit}
              name="firstName"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={formData?.lastName}
              disabled={edit}
              name="lastName"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicDOJ">
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control
              type="date"
              value={formData?.dateOfJoining}
              disabled={edit}
              name="dateOfJoining"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
          >
            <button
              className="pink-button"
              onClick={() => setEdit(!edit)}
              disabled={!edit}
            >
              Edit
            </button>

            <button className="pink-button" type="submit" disabled={edit}>
              Submit
            </button>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

export default AccountSetting;
