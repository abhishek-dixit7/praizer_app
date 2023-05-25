import "./App.css";
import AskMeLater from "./Components/AskMeLater";
import NavBar from "./Components/Navbar";
import SubNavBar from "./Components/Navbar/SubNavBar";
import Rcard from "./Components/RCard";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
function App() {
  return (
    <div className="App">
      <RouteComponents />
      <NavBar />
      <SubNavBar />
      <Rcard />
      <AskMeLater />
    </div>
  );
}

export default App;
