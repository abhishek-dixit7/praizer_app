import axios from "axios";
const baseURL = "https://localhost:7226/api/";
export const LoginService = (data) => {
  axios
    .post(`${baseURL}api/auth/firebase-login`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((r) => console.log(r.data));
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
