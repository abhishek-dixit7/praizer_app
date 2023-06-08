import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
import React from "react";
import { NavBar, SubNavBar, Banner } from "./Components/NavBar";
import ProfileCard from "./Components/Hero/ProfileCard";
import { CardGroup } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="App mx-auto">
      <NavBar />
      {loading ? (
        <div className="fs-1 mt-5">Loading...</div>
      ) : (
        !user && <div className="fs-1 mt-5">Please Login</div>
      )}
      {!loading && user && (
        <>
          <SubNavBar />
          <Banner />
          <CardGroup>
            <ProfileCard />
            <RouteComponents />
          </CardGroup>
        </>
      )}
    </div>
  );
}
export default App;
