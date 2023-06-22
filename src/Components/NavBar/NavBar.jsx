import { React, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navbar, Form, Button, Container, NavDropdown } from "react-bootstrap";
//import { GiShoppingCart } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { auth } from "../../utils/firebase";
import brand_logo from "../../assets/brand_logo.jpg";
import { GoogleLogin, LoginService } from "../../_services/LoginService";

const NavBar = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      LoginService(user.accessToken);
      navigate("/");
    } else {
      console.log("please login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
            style={{ justifyContent: "flex-end", gap: "2re" }}
          >
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
                <NavDropdown.Item>
                  <NavLink className="navbar-text" to="/accountsetting">
                    Account Setting
                  </NavLink>
                </NavDropdown.Item>

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
