import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
import React from "react";
import { NavBar, SubNavBar, Banner } from "./Components/NavBar";
import ProfileCard from "./Components/Hero/ProfileCard";
import { CardGroup } from "react-bootstrap";
import Celebrations from "./Components/Hero/Celebrations";

function App() {
  return (
    <div className="App mx-auto">
      <NavBar />
      <SubNavBar />
      <Banner />
      <CardGroup>
        <ProfileCard />
        <RouteComponents />
        <Celebrations />
      </CardGroup>
    </div>
  );
}
export default App;
