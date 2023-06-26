/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Card, Form } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { Context } from "../../Context/Context";
import SignUpCard from "./SignUpCard";
import { BiCopyright } from "react-icons/bi";
import { GoogleLogin, LoginService } from "../../_services/LoginService";

const LoginCard = () => {
  const [login, setLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { showToast } = useContext(Context);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const request = {
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
    console.log(request);
  };
  return (
    <div className="d-flex justify-content-center">
      {login ? (
        <Card className="card " style={{ width: "300px" }}>
          <Card.Header>
            <h5>Log In</h5>
            <p style={{ fontSize: ".8rem", fontWeight: "100%" }}>
              Click Login button in the Navbar for Google Login
            </p>
          </Card.Header>
          <Card.Body>
            <Form
              style={{ display: "grid", gap: "1rem" }}
              onSubmit={handleSubmit}
            >
              <Form.Group>
                <Form.Control
                  type="input"
                  value={formData?.username}
                  name="username"
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
                  type="submit"
                  className="pink-button"
                  style={{ height: "3rem", fontSize: "1rem", width: "100px" }}
                >
                  Login
                </button>
                <button
                  className="pink-button"
                  type="button"
                  onClick={() => setLogin(!login)}
                  style={{ height: "3rem", fontSize: "1rem", width: "100px" }}
                >
                  SignUp
                </button>
              </div>
            </Form>
            <p style={{ fontSize: ".8rem", fontWeight: "100%" }}>
              <div
                className="mt-1"
                style={{ cursor: "pointer" }}
                onClick={GoogleLogin}
              >
                <b>
                  {" "}
                  <NavLink>Login with Google</NavLink>
                </b>
              </div>
            </p>
          </Card.Body>
          <Card.Footer>
            <u>
              {" "}
              <p style={{ fontSize: ".8rem", fontWeight: "100%" }}>
                <BiCopyright /> {""}All Right Reserved. Designed by Gods
              </p>
            </u>
          </Card.Footer>
        </Card>
      ) : (
        <SignUpCard setLogin={setLogin} />
      )}
    </div>
  );
};

export default LoginCard;
