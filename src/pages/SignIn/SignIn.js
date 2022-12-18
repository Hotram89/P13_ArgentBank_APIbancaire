import React from "react";
import "./Signin.css";
import userIcon from "../../img/circle-user-solid.svg";

const SignIn = () => {
  return (
    <main classname="main bg-dark">
      <section classbame="sign-in-content">
        <img classname="fa sign-in-icon" src={userIcon} alt="sign in icon" />
        <h1>Sign In</h1>
        <form></form>
      </section>
    </main>
  );
};

export default SignIn;
