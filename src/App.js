import "./App.css";
import NavBar from "./Components/Navbar";
import SubNavBar from "./Components/Navbar/SubNavBar";
import Rcard from "./Components/RCard";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <Rcard />
      <RouteComponents />
    </div>
  );
}

export default App;
