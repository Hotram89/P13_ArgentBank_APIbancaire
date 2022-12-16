import React from "react";
import Logo from "../../img/argentBankLogo.png";
import userIcon from "../../img/circle-user-solid.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <img className="userIcon" src={userIcon} alt="User icon" />
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Header;
