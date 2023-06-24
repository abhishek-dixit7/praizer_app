import api from "./api";

const token = localStorage.getItem("jwtToken");
if (token) {
  // Include the JWT token in the request headers
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const createPraise = async (postData) => {
  try {
    //console.log(postData);
    // Make the API call
    const response = await api.post("/Praises/CreatePraises", postData);
    const praiseData = response;

    // console.log("Praise:", praiseData);
    return praiseData;
  } catch (error) {
    console.error("Failed to create praise:", error);
  }
};

export const getPraises = async () => {
  try {
    // Make the API call
    const response = await api.get("/Praises/GetPraises");
    const praiseData = response.data;
    return praiseData;
  } catch (error) {
    console.error("Failed to get praises:", error);
  }
};

export const getBirthdays = async () => {
  try {
    // Make the API call
    const response = await api.get("/Praises/GetBirthdays");
    const praiseData = response.data;
    return praiseData;
  } catch (error) {
    console.error("Failed to get birthdays:", error);
  }
};

export const getAnniverseries = async () => {
  try {
    // Make the API call
    const response = await api.get("/Praises/GetAnniversary");
    const praiseData = response.data;
    return praiseData;
  } catch (error) {
    console.error("Failed to get anniverseries:", error);
  }
};
