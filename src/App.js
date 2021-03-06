import "./App.css";

import { Admin, ListGuesser, Resource } from "react-admin";
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ArchivesPage from "./_pages/ArchivesPage";
import FactCheckPage from "./_pages/FactCheckPage";
import Header from "./_components/Header";
import HomePage from "./_pages/HomePage";
import InternationalNewsPage from "./_pages/InternationalNewsPage";
import LatestPage from "./_pages/LatestPage";
import Login from "./_components/Login";
import NationalNewsPage from "./_pages/NationalNewsPage";
import NavigationPc from "./_components/NavigationPc";
import NewsModule from "./_components/NewsModule";
import NewsThumbs from "./_components/NewsThumbs";
import UserMenu from "./_components/UserMenu";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

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
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/https://jsonplaceholder.typicode.com"
            element={<Admin dataProvider={dataProvider} />}
          />
        </Routes>
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
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/archives" element={<ArchivesPage />} />
            <Route path="/fact-check" element={<FactCheckPage />} />
            <Route path="/latest" element={<LatestPage />} />
            <Route path="/national-news" element={<NationalNewsPage />} />
            <Route
              path="/international-news"
              element={<InternationalNewsPage />}
            />
          </Routes>
          {/* <NewsModule /> */}
          <NewsThumbs />
        </main>
      </div>
    </Router>
  );
};

export default App;
