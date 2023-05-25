import React from "react";
import { Navbar, Form, Button, Container, NavDropdown } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";

import brand_logo from "../../assets/brand_logo.jpg";

const NavBar = () => {
  return (
    <>
      <Navbar className="bg-dark justify-content-between col-md-9 mx-auto">
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
            <a href="#">
              <GiShoppingCart className="d-inline-block align-top navbar__icons" />
            </a>
            <a href="#">
              <IoMdNotifications className="d-inline-block align-top navbar__icons" />
            </a>
            <NavDropdown
              title={
                <div>
                  <img
                    src={brand_logo}
                    width="30"
                    height="30"
                    alt="profile_logo"
                    className="rounded-circle"
                  />{" "}
                  Account
                </div>
              }
              id="basic-nav-dropdown"
              className=" text-white mt-1 access__a-tag "
            >
              <NavDropdown.Item href="#">Account Setting</NavDropdown.Item>
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<div>Help</div>}
              id="basic-nav-dropdown"
              className="text-white mt-1 access__a-tag-help"
            >
              <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
