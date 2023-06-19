import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
import React, { useEffect } from "react";
import { NavBar, SubNavBar, Banner } from "./Components/NavBar";
import ProfileCard from "./Components/Hero/ProfileCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";

function App() {
  const [user, loading] = useAuthState(auth);

  //Auto Logout on window close
  useEffect(() => {
    const handleAppClose = () => {
      auth
        .signOut()
        .then(() => {
          // Logout successful
        })
        .catch((error) => {
          // An error occurred while logging out
          console.log(error);
        });
    };

    // window.addEventListener("beforeunload", handleAppClose);

    // return () => {
    //   window.removeEventListener("beforeunload", handleAppClose);
    // };
  }, []);

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
          <RouteComponents />
        </>
      )}
    </div>
  );
}
export default App;
