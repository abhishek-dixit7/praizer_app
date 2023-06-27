import { auth } from "../utils/firebase";
import api from "./api";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const LoginService = async (data) => {
  try {
    const requestBody = {
      IdToken: data,
    };

    // eslint-disable-next-line no-unused-vars
    const response = await api.post(
      "/auth/firebase-login",
      JSON.stringify(requestBody),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Token", response);
    // The JWT token is automatically handled by the interceptor, so you don't need to do anything extra here.
    console.log("Login successful!");
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const GoogleLogin = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log(error);
  }
};

export const LoginWithUsername = async (data) => {
  try {
    // api.defaults.headers["Content-Type"] = "application/json";
    console.log("Request", data);
    const res = await api.post("/login/SignUp", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
