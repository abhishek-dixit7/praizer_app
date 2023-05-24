import React from "react";
import { Navbar, Form, Button, Container } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

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
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
