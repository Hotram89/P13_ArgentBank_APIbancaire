import React from "react";
import "./Signin.css";
import userIcon from "../../img/circle-user-solid.svg";
import { useState } from "react";

const SignIn = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  function handleSubmit(e) {
    // Ne pas recharger la page
    e.preventDefault();

    // Récupérer la saisie du formulaire (Username / password)

    // Envoyer ces données au back via l'API pour vérifier si OK

    // Si OK : on récupère le token de l'utilisateur renvoyé par le back
    // Si OK : naviguer vers la page userDashboard

    // Si pas OK... à voir
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
