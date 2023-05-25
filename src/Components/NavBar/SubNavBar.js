import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import routes from "../routes/routes";
import { BrowserRouter, NavLink } from "react-router-dom";
function SubNavBar() {
  console.log(routes);
  return (
    <div>
      <BrowserRouter>
        <Navbar className="bg-light col-md-9 mx-auto">
          <Container>
            {routes.children.map((route) => {
              return (
                <Nav key={route.keyword}>
                  <Nav.Link as={NavLink} to={route.to}>
                    {<route.icon />}
                    {route.name}
                  </Nav.Link>
                </Nav>
              );
            })}
          </Container>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default SubNavBar;
