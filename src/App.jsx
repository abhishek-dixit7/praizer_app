import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
import React, { useEffect } from "react";
import { NavBar, SubNavBar, Banner } from "./Components/NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import LoadingSpinner from "./Components/subComponents/LoadingSpinner";
import LoginCard from "./Components/subComponents/LoginCard";

function App() {
  const [user, loading] = useAuthState(auth);

  //Auto Logout on window close
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
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
        <div className="fs-1 mt-5">
          <LoadingSpinner />
        </div>
      ) : (
        !user && (
          <div className="fs-1 mt-5">
            <LoginCard />
          </div>
        )
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
