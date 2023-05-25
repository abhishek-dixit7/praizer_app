import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import routes from "../routes/routes";
import { NavLink } from "react-router-dom";
function SubNavBar() {
  console.log(routes);
  return (
    <div>
      <Navbar className="bg-light col-md-9 mx-auto ">
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

export default SubNavBar;
