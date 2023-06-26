/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { Context } from "../../Context/Context";
import { ImArrowLeft } from "react-icons/im";
import { GoogleLogin, LoginService } from "../../_services/LoginService";

const SignUpCard = ({ setLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    usernane: "",
    password: "",
  });
  const navigate = useNavigate();
  const { showToast } = useContext(Context);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const request = {
      name: formData.name,
      username: formData.username,
      password: formData.password,
    };
    // UpdateUserDetailsByUid(JSON.stringify(request)).then((x) => {
    //   if (x.status === 200) {
    //     navigate("/");
    //     showToast("Update Successful!", "success");
    //   } else {
    //     showToast("Updation Failed!", "error");
    //   }
    // });
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Card className="card " style={{ width: "300px" }}>
          <Card.Header as={"h5"}>
            <p style={{ fontSize: "1rem" }}>Welcome to the Praizer Portal</p>{" "}
            Sign Up
          </Card.Header>
          <Card.Body>
            <Form
              style={{ display: "grid", gap: "1rem" }}
              onSubmit={handleSubmit}
            >
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  rows={3}
                  required
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                  }}
                  value={formData?.name}
                  onChange={handleChange}
                  name="name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="input"
                  value={formData?.userName}
                  name="userName"
                  required
                  placeholder="Username"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  rows={3}
                  required
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                  }}
                  value={formData?.password}
                  onChange={handleChange}
                  name="password"
                />
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
                  onClick={setLogin}
                  className="pink-button "
                  style={{ height: "3rem", fontSize: "1rem", width: "50px" }}
                >
                  <ImArrowLeft />
                </button>
                <button
                  type="submit"
                  className="pink-button "
                  style={{ height: "3rem", fontSize: "1rem", width: "95px" }}
                >
                  Register
                </button>
              </div>
            </Form>
          </Card.Body>

          <Card.Footer>
            <p style={{ fontSize: ".8rem", fontWeight: "100%" }}>
              <div
                className="mt-1"
                style={{ cursor: "pointer" }}
                onClick={GoogleLogin}
              >
                <u>
                  <NavLink>Signup with Google</NavLink>
                </u>
              </div>
            </p>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default SignUpCard;
