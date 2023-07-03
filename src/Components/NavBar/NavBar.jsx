import { React, useEffect, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Form, Button, Container, NavDropdown } from "react-bootstrap";
import { IoMdNotifications } from "react-icons/io";

import brand_logo from "../../assets/brand_logo.jpg";
import placeholder from "../../assets/profile_placeholder.jpg";
import { Logout } from "../../_services/LoginService";
import { Context } from "../../Context/Context";
import { GetUserDetailsByUid } from "../../_services/UserService";

const NavBar = () => {
  const { showToast } = useContext(Context);
  const [user, setUser] = useState();
  const currentUserId = sessionStorage.getItem("currentUserId");

  const GetUser = async () => {
    GetUserDetailsByUid(currentUserId)
      .then((x) => {
        setUser(x);
        // console.log(x);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar
        className="bg-dark justify-content-between"
        style={{ borderRadius: "0.275rem" }}
      >
        <Container className="justify-content-start">
          <Link to="/home">
            <Navbar.Brand>
              <img
                src={brand_logo}
                width="30"
                height="30"
                alt="Praizer Logo"
                className="rounded-circle"
              />
            </Navbar.Brand>
          </Link>

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
          <Container
            className="d-flex align-item-center text-center"
            style={{ justifyContent: "flex-end", gap: "2rem" }}
          >
            <a href="/">
              <IoMdNotifications className="d-inline-block align-top navbar__icons" />
            </a>
            {/* {!user && (
              <div
                className="mt-1"
                style={{ cursor: "pointer" }}
                onClick={GoogleLogin}
              >
                <Navbar.Text className="text-white">Login</Navbar.Text>
              </div>
            )} */}
            {user && (
              <NavDropdown
                title={
                  <div>
                    <img
                      src={user.photoUrl === null ? placeholder : user.photoUrl}
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
                <NavDropdown.Item
                  as={NavLink}
                  to="/accountsetting"
                  className="navbar-text"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                    background: isActive ? "#fff" : "#f0f0f0",
                  })}
                >
                  Account Setting
                </NavDropdown.Item>

                <Navbar.Text
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    Logout();
                    showToast("Sorry to let you go!", "error");
                    setTimeout(() => {
                      window.location.href = "/";
                    }, 2000);
                  }}
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
              <NavDropdown.Item>
                <NavLink className="navbar-text" to="/contact">
                  Contact Us
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
