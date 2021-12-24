import "./App.css";

import React, { useState } from "react";

import Header from "./_components/Header";
import NavigationPc from "./_components/NavigationPc";

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
