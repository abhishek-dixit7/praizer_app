import "./App.css";
import Rcard from "./Components/RCard";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
import React from "react";
import { NavBar, SubNavBar, Banner } from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <Banner />
      <Rcard />
      <RouteComponents />
    </div>
  );
}

export default App;
