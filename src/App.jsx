import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponents from "./Components/routes";
import React, { useEffect, useState } from "react";
import { NavBar, SubNavBar, Banner } from "./Components/NavBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import LoadingSpinner from "./Components/subComponents/LoadingSpinner";
import LoginCard from "./Components/subComponents/LoginCard";
import { GetUserDetailsByUid } from "./_services/UserService";

function App() {
  // const [user, loading] = useAuthState(auth);
  const currentUserId = localStorage.getItem("currentUserId");
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  //Auto Logout on window close
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    fetchUserDetails(currentUserId);
    console.log("currentUser", currentUser);
    const handleAppClose = () => {
      // auth
      //   .signOut()
      //   .then(() => {
      //     // Logout successful
      //   })
      //   .catch((error) => {
      //     // An error occurred while logging out
      //     console.log(error);
      //   });
      localStorage.clear();
    };
    window.addEventListener("beforeunload", handleAppClose);
    return () => {
      window.removeEventListener("beforeunload", handleAppClose);
    };
  }, []);

  const fetchUserDetails = async (currentUserId) => {
    GetUserDetailsByUid(currentUserId).then((res) => {
      setCurrentUser(res);
      setLoading(false);
    });
  };

  return (
    <div className="App mx-auto">
      {loading ? (
        <div className="fs-1 mt-5">
          <LoadingSpinner />
        </div>
      ) : (
        !currentUser && (
          <div className="fs-1 mt-5">
            <LoginCard />
          </div>
        )
      )}
      {!loading && currentUser && (
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
