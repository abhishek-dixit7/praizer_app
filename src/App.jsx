import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import RouteComponents from "./Components/routes";
import { NavBar, SubNavBar, Banner } from "./Components/NavBar";
import LoginCard from "./Components/subComponents/LoginCard";
import { GetUserDetailsByUid } from "./_services/UserService";
import LoadingSpinner from "./Components/subComponents/LoadingSpinner";
import { auth } from "./utils/firebase";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const currentUserId = sessionStorage.getItem("currentUserId");

  useEffect(() => {
    //fetching currentUser
    if (currentUserId) fetchUserDetails(currentUserId);
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
    window.addEventListener("unload", handleAppClose);
    return () => {
      window.removeEventListener("unload", handleAppClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserDetails = async (currentUserId) => {
    GetUserDetailsByUid(currentUserId).then((res) => {
      setCurrentUser(res);
      setLoading(false);
    });
  };

  return (
    <div className="App mx-auto">
      {loading && currentUserId ? (
        <div
          style={{
            minHeight: "100dvh",
            display: "grid",
            placeContent: "center",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : (
        !currentUser && (
          <div
            style={{
              minHeight: "100dvh",
              display: "grid",
              placeContent: "center",
            }}
          >
            <LoginCard />
          </div>
        )
      )}

      {!loading && currentUserId && currentUser && (
        <>
          <NavBar />
          <SubNavBar />
          <Banner />
          <RouteComponents />
        </>
      )}
    </div>
  );
}
export default App;
