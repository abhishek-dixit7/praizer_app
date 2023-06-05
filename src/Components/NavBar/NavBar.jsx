import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navbar, Form, Button, Container, NavDropdown } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { auth } from "../../utils/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

import brand_logo from "../../assets/brand_logo.jpg";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const LoginPraizer = async (idToken) => {
    try {
      const requestBody = {
        IdToken: idToken,
      };

      // axios({
      //   method: "post",
      //   url: "https://localhost:7226/api/auth/firebase-login",
      //   data: JSON.stringify(requestBody),
      //   headers: { "Content-Type": "application/json" },
      // }).then((apiResponse) => {
      //   console.log(apiResponse.data);
      //   // response.json(products);
      // });

      const data = await axios
        .post("https://localhost:7226/api/auth/firebase-login", requestBody, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((r) => console.log(r.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      LoginPraizer(user.accessToken);
      navigate("/");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <>
      <Navbar className="bg-dark justify-content-between">
        <Container className="justify-content-start">
          <Navbar.Brand href="#" className="">
            <img
              src={brand_logo}
              width="30"
              height="30"
              alt="Praizer Logo"
              className="rounded-circle"
            />
          </Navbar.Brand>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
        <Container className="justify-content-end ml-5">
          <Container className="d-flex justify-content-around align-item-center text-center">
            <a href="/">
              <GiShoppingCart className="d-inline-block align-top navbar__icons" />
            </a>
            <a href="/">
              <IoMdNotifications className="d-inline-block align-top navbar__icons" />
            </a>
            {!user && (
              <div
                className="mt-1"
                style={{ cursor: "pointer" }}
                onClick={GoogleLogin}
              >
                <Navbar.Text className="text-white">Login</Navbar.Text>
              </div>
            )}
            {user && (
              <NavDropdown
                title={
                  <div>
                    <img
                      src={user.photoURL}
                      width="30"
                      height="30"
                      alt="profile_logo"
                      className="rounded-circle"
                    />{" "}
                    Account
                  </div>
                }
                id="basic-nav-dropdown"
                className="text-white mt-1 access__a-tag "
              >
                <NavDropdown.Item href="#">Account Setting</NavDropdown.Item>
                <Navbar.Text
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => auth.signOut()}
                >
                  Logout
                </Navbar.Text>
              </NavDropdown>
            )}
            <NavDropdown
              title={<div>Help</div>}
              id="basic-nav-dropdown"
              className="text-white mt-1 access__a-tag-help"
            >
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
