import "./App.css";
import NavBar from "./Components/NavBar";
import SubNavBar from "./Components/NavBar/SubNavBar";
import Rcard from "./Components/RCard";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <RouteComponents />
      <Rcard />
    </div>
  );
}

export default App;
