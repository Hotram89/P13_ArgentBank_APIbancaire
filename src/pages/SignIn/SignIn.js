import React, { useEffect } from "react";
import "./Signin.css";
import userIcon from "../../img/circle-user-solid.svg";
import { useState } from "react";
import { getToken } from "../../provider/APIprovider.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tokenSlice } from "../../store/slices/tokenSlice";

const SignIn = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //POST request using axios with error handling

  async function handleSubmit(e) {
    e.preventDefault();
    let token = await getToken(userEmail, userPassword);
    dispatch(tokenSlice.actions.saveToken(token));
    localStorage.setItem("HelloSecurityTeam", token);
    if (token) {
      navigate("/user");
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <img className="fa sign-in-icon" src={userIcon} alt="sign in icon" />
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label>
              Username
              <input
                type="text"
                id="username"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              Password
              <input
                type="password"
                id="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="input-remember">
            <label>
              Remember me
              <input type="checkbox" id="remember-me" />
            </label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
