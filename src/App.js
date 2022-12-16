import React from "react";
import "./App.css";
import Header from "./componants/header/Header";
import Router from "./route/Router.js";
import { BrowserRouter } from "react-router-dom";
import Footer from "./componants/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Router />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
