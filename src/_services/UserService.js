import api from "./api";

export const fetchUsersData = async () => {
  try {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      // Include the JWT token in the request headers
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    // Make the API call
    const response = await api.get("/Users/getUserDetails");
    const userData = response.data;

    console.log("User data:", userData);
    return userData;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};
