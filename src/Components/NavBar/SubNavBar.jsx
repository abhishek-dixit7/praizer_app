import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import routes from "../routes/routes";
import { NavLink } from "react-router-dom";

export default function SubNavBar() {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "var(--clr-primary-400)",
          color: "white",
          borderRadius: "0.275rem",
        }}
      >
        <Container>
          {routes.children.map((route) => {
            return (
              <Nav key={route.keyword}>
                <Nav.Link
                  as={NavLink}
                  to={route.to}
                  className="d-flex justify-content-around m-0"
                >
                  {<route.icon className="subnavbar__icons" />}
                  <span>{route.name}</span>
                </Nav.Link>
              </Nav>
            );
          })}
        </Container>
      </Navbar>
    </div>
  );
}
