import axios from "axios";

// Create an instance of Axios with default configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_baseURL,
  // Replace with your API base URL
});

api.defaults.headers["Content-Type"] = "application/json";

// Set up an interceptor to handle the JWT token
api.interceptors.response.use(
  (response) => {
    // If the response contains a JWT token, store it in localStorage or a state management solution
    const token = response.data.token;
    if (token) {
      // Store the token for future API calls
      localStorage.setItem("jwtToken", token);
      // You can also set the token in your application's state management solution
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
