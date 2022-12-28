import axios from "axios";
import { createPath, json } from "react-router-dom";
import tokenSlice from "../store/slices/tokenSlice";

//POST request using axios with error handling
export async function getToken(userEmail, userPassword) {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        email: userEmail,
        password: userPassword,
      }
    );
    let token = response?.data?.body?.token;
    return token;
  } catch (error) {
    if (error.message) {
      console.error("There was an error", error.message);
    } else {
      console.error("Unknown error");
    }
  }
}

//POST request using axios with error handling

export async function getUser(token) {
  try {
    const payload = {
      method: "POST",
      url: "http://localhost:3001/api/v1/user/profile",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      },
    };
    const response = await axios(payload);

    let result = response?.data?.body;
    return result;
  } catch (error) {
    if (error.message) {
      console.error("There was an error", error.message);
    } else {
      console.error("Unknown error");
    }
  }
}

//PUT request using axios with error handling

export async function editUser(token, firstName, lastName) {
  try {
    const payload = {
      method: "PUT",
      //     url: "http://localhost:3001/api/v1/user/profile",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      },
      body: JSON.stringify({ firstName, lastName }),
    };
    const response = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      payload
    );
    return response.ok;
  } catch (error) {
    if (error.message) {
      console.error("There was an error", error.message);
    } else {
      console.error("Unknown error");
    }
  }
}
