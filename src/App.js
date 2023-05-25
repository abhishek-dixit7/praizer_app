import "./App.css";
import Rcard from "./Components/RCard";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
import React from "react";
import { NavBar, SubNavBar, Banner } from "./Components/NavBar";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <div className="App col-md-9 mx-auto">
      <NavBar />
      <SubNavBar />
      <Banner />
      <ProfileCard />
      <RouteComponents />
    </div>
  );
}

export default App;
