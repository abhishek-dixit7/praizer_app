import api from "./api";

const token = localStorage.getItem("jwtToken");
if (token) {
  // Include the JWT token in the request headers
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const createPraise = async (postData) => {
  try {
    console.log(postData);
    // Make the API call
    const response = await api.post("/Praises/CreatePraises", postData);
    const praiseData = response;

    // console.log("Praise:", praiseData);
    return praiseData;
  } catch (error) {
    console.error("Failed to create praise:", error);
  }
};
