import { React, useEffect, useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navbar, Form, Button, Container, NavDropdown } from "react-bootstrap";
//import { GiShoppingCart } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { auth } from "../../utils/firebase";
import brand_logo from "../../assets/brand_logo.jpg";
import { GoogleLogin, LoginService } from "../../_services/LoginService";
import { Context } from "../../Context/Context";
import { GetUserDetailsByUid } from "../../_services/UserService";

const NavBar = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [currentUser] = useAuthState(auth);
  const { showToast } = useContext(Context);
  const [user, setUser] = useState({});

  const GetUser = async () => {
    GetUserDetailsByUid(currentUser.uid)
      .then((x) => {
        setUser(x);
        // console.log(x);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (currentUser) {
      try {
        LoginService(currentUser.accessToken);
        GetUser();
        navigate("/");
        showToast("Logged In Successfully!", "success");
      } catch (err) {
        navigate("/notfound");
      }
    } else {
      console.log("please login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

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
            {!currentUser && (
              <div
                className="mt-1"
                style={{ cursor: "pointer" }}
                onClick={GoogleLogin}
              >
                <Navbar.Text className="text-white">Login</Navbar.Text>
              </div>
            )}
            {currentUser && (
              <NavDropdown
                title={
                  <div>
                    <img
                      src={user.photoUrl}
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
                    auth.signOut();
                    showToast("Sorry to let you go!", "error");
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
