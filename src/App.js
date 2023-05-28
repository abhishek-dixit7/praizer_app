import "./App.css";
// import Rcard from "./Components/RCard";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
import React from "react";
import { NavBar, SubNavBar, Banner } from "./Components/Navbar";
import ProfileCard from "./Components/ProfileCard";
import { CardGroup } from "react-bootstrap";

function App() {
  return (
    <div className="App col-md-9 mx-auto">
      <NavBar />
      <SubNavBar />
      <Banner />
      <CardGroup>
        <ProfileCard />
        <RouteComponents />
      </CardGroup>
    </div>
  );
}
export default App;
