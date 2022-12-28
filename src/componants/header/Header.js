import React from "react";
import Logo from "../../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";
import UserBtn from "./UserBtn";

const Header = () => {
  const profil = useSelector((state) => state.user.value);
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

      {profil && <UserBtn user={profil} />}
      {profil && <SignOutBtn />}
      {!profil && <SignInBtn />}
    </nav>
  );
};

export default Header;
