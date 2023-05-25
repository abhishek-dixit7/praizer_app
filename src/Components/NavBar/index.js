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
        <Container className="justify-content-end ">
          <a href="#">
            <GiShoppingCart className="d-inline-block align-top navbar__icons" />
          </a>
          <a href="#">
            <IoMdNotifications className="d-inline-block align-top navbar__icons" />
          </a>
          <NavDropdown
            title="Account"
            id="basic-nav-dropdown"
            className="text-white"
          >
            <NavDropdown.Item href="#">Account Setting</NavDropdown.Item>
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Help"
            id="basic-nav-dropdown"
            className="text-white"
          >
            <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
