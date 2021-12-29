import "./App.css";

import React, { useState } from "react";

import Header from "./_components/Header";
import Login from "./_components/Login";
import NavigationPc from "./_components/NavigationPc";
import UserMenu from "./_components/UserMenu";

const App = () => {
  // let inputValue = document.getElementById("login-email").value;

  const [sideBarMenuActive, setSideBarMenuActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logInModalActive, setLogInModalActive] = useState(false);
  const [userMenuActive, setUserMenuActive] = useState(false);
  // const [signedInText, setSignedInText] = useState("");
  // const [subscribedValue, setSubscribedValue] = useState("");
  // const [emailInputValue, setEmailInputValue] = useState("");
  return (
    <div className="App">
      <Header
        bellStyle={{ display: isLoggedIn ? "block" : "none" }}
        envelopeStyle={{ display: isLoggedIn ? "block" : "none" }}
        userIconClick={() => {
          setUserMenuActive(!userMenuActive);
          setSideBarMenuActive(false);
        }}
      />
      <UserMenu
        // userMenuStyle={{ display: userMenuActive ? "block" : "none" }}
        userMenuStyle={{ marginRight: userMenuActive ? "0" : "-20rem" }}
        logInMenuItemClick={() => {
          setLogInModalActive(!logInModalActive);
          setUserMenuActive(!userMenuActive);
        }}
        logOutMenuItemClick={() => {
          // setLoginModalActive(!loginModalActive);
          setUserMenuActive(!userMenuActive);
          setIsLoggedIn(!isLoggedIn);
        }}
        logInMenuItemStyle={{ display: isLoggedIn ? "none" : "block" }}
        signUpMenuItemStyle={{ display: isLoggedIn ? "none" : "block" }}
        logOutMenuItemStyle={{ display: isLoggedIn ? "block" : "none" }}
        signedInTextValue={
          isLoggedIn ? /*{ inputValue }*/ +" is logged in" : "Not signed in"
        }
        subscribeBtnClick={() => {
          // setSubscribedValue(subscribedValue.val());
          // console.log(subscribedValue);
        }}
      />
      <Login
        logInModalStyle={{ display: logInModalActive ? "block" : "none" }}
        logInCancelClick={() => {
          setLogInModalActive(false);
          setUserMenuActive(!userMenuActive);
        }}
        logInSubmitClick={() => {
          setLogInModalActive(false);
          setIsLoggedIn(true);
        }}
        // logInEmailId="login-email"
        // logInEmailValue={emailInputValue}
        // onLogInEmailChange={(e) => setEmailInputValue(e.target.value)}
      />
      <NavigationPc
        sideBarMenuToggle={() => {
          setSideBarMenuActive(!sideBarMenuActive);
          setLogInModalActive(false);
          setUserMenuActive(false);
        }}
        sideBarMenuStyle={{ left: sideBarMenuActive ? "0" : "-25vw" }}
        chevronLeftStyle={{ display: sideBarMenuActive ? "block" : "none" }}
        chevronRightStyle={{ display: sideBarMenuActive ? "none" : "block" }}
      />
      <main>
        {/* userIconClick={() => {
          setLoginModalActive(!loginModalActive);
        }} */}
      </main>
    </div>
  );
};

export default App;
