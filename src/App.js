import "./App.css";

import React, { useState } from "react";

import Header from "./_components/Header";
import Login from "./_components/Login";
import NavigationPc from "./_components/NavigationPc";

const App = () => {
  const [sideBarMenuActive, setSideBarMenuActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginModalActive, setLoginModalActive] = useState(false);
  return (
    <div className="App">
      <Header
        bellStyle={{ display: isLoggedIn ? "block" : "none" }}
        envelopeStyle={{ display: isLoggedIn ? "block" : "none" }}
      />
      <Login
        loginModalStyle={{ display: loginModalActive ? "block" : "none" }}
        loginCancelClick={() => {
          setLoginModalActive(false);
        }}
        loginSubmitClick={() => {
          setLoginModalActive(false);
          setIsLoggedIn(true);
        }}
      />
      <NavigationPc
        sideBarMenuToggle={() => {
          setSideBarMenuActive(!sideBarMenuActive);
        }}
        sideBarMenuStyle={{ left: sideBarMenuActive ? "0" : "-25vw" }}
        chevronLeftStyle={{ display: sideBarMenuActive ? "block" : "none" }}
        chevronRightStyle={{ display: sideBarMenuActive ? "none" : "block" }}
      />
      <main>
        <button
          onClick={() => {
            setLoginModalActive(true);
          }}
        >
          login
        </button>
      </main>
    </div>
  );
};

export default App;
