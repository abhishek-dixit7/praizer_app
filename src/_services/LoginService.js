import api from "./api";
// const baseURL = "https://localhost:44306/";

export const LoginService = async (data) => {
  try {
    const response = await api.post(
      "/auth/firebase-login",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // The JWT token is automatically handled by the interceptor, so you don't need to do anything extra here.
    console.log("Login successful!");
  } catch (error) {
    console.error("Login failed:", error);
  }

  // axios
  //   .post(
  //     `${process.env.REACT_APP_baseURL}api/auth/firebase-login`,
  //     JSON.stringify(data),
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //   .then((r) => console.log(r.data))
  //   .catch((error) => console.log(error));
};

// axios({
//   method: "post",
//   url: "https://localhost:7226/api/auth/firebase-login",
//   data: JSON.stringify(requestBody),
//   headers: { "Content-Type": "application/json" },
// }).then((apiResponse) => {
//   console.log(apiResponse.data);
//   // response.json(products);
// });
