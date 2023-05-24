import "./App.css";
import AskMeLater from "./Components/AskMeLater";
import NavBar from "./Components/NavBar";
import Rcard from "./Components/RCard";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Rcard />
      <AskMeLater />
    </div>
  );
}

export default App;
