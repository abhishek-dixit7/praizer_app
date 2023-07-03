import React, { useState, useContext, useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import { Context } from "../../Context/Context";
import SignUpCard from "./SignUpCard";
import { BiCopyright } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleLogin,
  Login,
  FirebaseLogin,
} from "../../_services/LoginService";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginCard = () => {
  const [login, setLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [googleUser] = useAuthState(auth);

  const { showToast } = useContext(Context);

  useEffect(() => {
    if (googleUser) {
      FirebaseLogin(googleUser.accessToken);
      showToast("Google Log In was Successfully!!!", "success");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    //console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const request = {
      username: formData.username,
      password: formData.password,
    };
    Login(JSON.stringify(request)).then((x) => {
      if (x.status === 200) {
        showToast("Logged In Successfully!!!", "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        showToast(x.data, "error");
      }
    });
    console.log(request);
  };
  return (
    <div className="d-flex justify-content-center">
      {login ? (
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
              Log In
            </div>
            <Form
              style={{ display: "grid", gap: "1.5rem" }}
              onSubmit={handleSubmit}
            >
              <Form.Group>
                <Form.Control
                  type="input"
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
                  value={formData?.password}
                  onChange={handleChange}
                  name="password"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                  }}
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
                  Login
                </button>
                <button
                  className="pink-button"
                  type="button"
                  onClick={() => setLogin(!login)}
                >
                  Sign Up
                </button>
                <button
                  className="pink-button"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={GoogleLogin}
                >
                  Login with <FcGoogle style={{ marginLeft: "0.2rem" }} />
                  oogle
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
      ) : (
        <SignUpCard setLogin={setLogin} />
      )}
    </div>
  );
};

export default LoginCard;
