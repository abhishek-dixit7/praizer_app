/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { BiCopyright } from "react-icons/bi";
import { Context } from "../../Context/Context";
import { SignUp } from "../../_services/LoginService";

const SignUpCard = ({ setLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username,
      password: formData.password,
    };

    // const response = await LoginWithUsername(JSON.stringify(request));
    // console.log("response", response);

    SignUp(JSON.stringify(request)).then((x) => {
      console.log("x", x.status);
      if (x && x.status === 200) {
        showToast("Sign Up Successful!!!", "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        showToast(x.data, "error");
      }
    });
  };
  return (
    <div className="d-flex justify-content-center">
      <Card>
        <Card.Header
          style={{
            fontSize: "1.5rem",
            paddingInline: "1rem",
            paddingBlock: "0.5rem",
            fontWeight: "500",
          }}
        >
          Welcome to the Praizer Portal
        </Card.Header>
        <Card.Body>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Sign Up
          </div>
          <Form
            style={{ display: "grid", gap: "1rem" }}
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="First Name"
                rows={3}
                required
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                }}
                value={formData?.name}
                onChange={handleChange}
                name="firstName"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Last Name"
                rows={3}
                required
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                }}
                value={formData?.lastName}
                onChange={handleChange}
                name="lastName"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                value={formData?.username}
                name="username"
                required
                placeholder="Email"
                onChange={handleChange}
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                }}
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

            <Form.Group
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                fontSize: "1rem",
              }}
            >
              <button type="submit" className="pink-button">
                Register
              </button>
              <button onClick={setLogin} className="pink-button">
                Back to Login
              </button>
            </Form.Group>
          </Form>
        </Card.Body>

        <Card.Footer>
          <div
            style={{
              fontSize: ".8rem",
              fontWeight: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.2rem",
            }}
          >
            <BiCopyright /> All Right Reserved. Designed by Gods
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SignUpCard;
