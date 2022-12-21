import React from "react";
import Logo from "../../img/argentBankLogo.png";
import userIcon from "../../img/circle-user-solid.svg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        <Link className="main-nav-item" to="/sign-in">
          <img className="userIcon" src={userIcon} alt="User icon" />
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Header;
