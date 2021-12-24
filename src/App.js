import "./App.css";

import React, { useState } from "react";

import ArchivesPage from "./_pages/ArchivesPage";
import BidenPage from "./_pages/BidenPage";
import ChinaPage from "./_pages/ChinaPage";
import FactCheckPage from "./_pages/FactCheckPage";
import Header from "./_components/Header";
import HomePage from "./_pages/HomePage";
import HypocrisyPage from "./_pages/HypocrisyPage";
import LatestPage from "./_pages/LatestPage";
import NationalNewsPage from "./_pages/NationalNewsPage";
import NavigationPc from "./_components/NavigationPc";
import PoliticsPage from "./_pages/PoliticsPage";
import { Route } from "react-router";
import RussiaPage from "./_pages/RussiaPage";
import SuppressedNewsPage from "./_pages/SuppressedNewsPage";
import UnbelievablePage from "./_pages/UnbelievablePage";

const App = () => {
  const [sideBarMenuActive, setSideBarMenuActive] = useState(false);
  return (
    <div className="App">
      <Header />
      <NavigationPc
        sideBarMenuToggle={() => {
          setSideBarMenuActive(!sideBarMenuActive);
        }}
        sideBarMenuStyle={{ left: sideBarMenuActive ? "0" : "-25vw" }}
        chevronLeftStyle={{ display: sideBarMenuActive ? "block" : "none" }}
        chevronRightStyle={{ display: sideBarMenuActive ? "none" : "block" }}
      />
      <main></main>
    </div>
  );
};

export default App;
