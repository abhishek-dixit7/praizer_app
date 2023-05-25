import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import routes from "../routes/routes";
function SubNavBar() {
  console.log(routes);
  return (
    <div>
      <Navbar className="bg-light col-md-9 mx-auto">
        <Container>
          <Nav className="justify-content-start">
            {routes.children.map((route) => {
              return (
                <Nav.Link key={route.keyword} to={route.path}>
                  <route.icon />
                  {route.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default SubNavBar;
