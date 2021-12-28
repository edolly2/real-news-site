import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Link, Route, Switch } from "react-router-dom";

import ArchivesPage from "../_pages/ArchivesPage";
import BidenPage from "../_pages/BidenPage";
import ChinaPage from "../_pages/ChinaPage";
import FactCheckPage from "../_pages/FactCheckPage";
import HomePage from "../_pages/HomePage";
import HypocrisyPage from "../_pages/HypocrisyPage";
import LatestPage from "../_pages/LatestPage";
import NationalNewsPage from "../_pages/NationalNewsPage";
import PoliticsPage from "../_pages/PoliticsPage";
import RussiaPage from "../_pages/RussiaPage";
import SuppressedNewsPage from "../_pages/SuppressedNewsPage";
import UnbelievablePage from "../_pages/UnbelievablePage";
import styled from "styled-components";

const SideBarMenu = styled.aside`
  width: 25vw;
  height: 100%;
  background-color: blue;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 500ms linear;
`;

const SideBarNav = styled.nav`
  width: 100%;
  height: 100%;
  background-color: green;
  position: relative;
`;

const SideBarNavList = styled.ul`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  & li {
    width: 100%;
    text-align: center;
    padding: 0.4rem 0;
  }

  & li:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

const SideBarToggle = styled.div`
  background-color: teal;
  position: absolute;
  left: 25vw;
  top: 50%;
  transform: translate(0, -50%);
  width: 3.2rem;
  //   height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SideBarTitle = styled.h2`
  text-align: center;
  padding: 1.6rem 0;
  border-bottom: 2px solid black;
  width: 50%;
  margin: 0 auto;
  padding-bottom: 0;
  white-space: nowrap;
`;

const NavigationPc = (props) => {
  return (
    <SideBarMenu style={props.sideBarMenuStyle}>
      <SideBarNav>
        <SideBarTitle>Main Menu</SideBarTitle>
        <SideBarToggle onClick={props.sideBarMenuToggle}>
          <BsChevronDoubleRight
            className="icons chevrons"
            style={props.chevronRightStyle}
          />
          <BsChevronDoubleLeft
            className="icons chevrons"
            style={props.chevronLeftStyle}
          />
        </SideBarToggle>
        <SideBarNavList>
          <li>Home</li>
          <li>Latest</li>
          <li>Politics</li>
          <li>National News</li>
          <li>China</li>
          <li>Russia</li>
          <li>Biden</li>
          <li>Suppressed News</li>
          <li>Unbelievable</li>
          <li>Hypocrisy</li>
          <li>Fact Check</li>
          <li>Archives</li>
        </SideBarNavList>
      </SideBarNav>
      {/* <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/archives">
        <ArchivesPage />
      </Route>
      <Route path="/biden">
        <BidenPage />
      </Route>
      <Route path="/china">
        <ChinaPage />
      </Route>
      <Route path="/fact_check">
        <FactCheckPage />
      </Route>
      <Route path="/hypocrisy">
        <HypocrisyPage />
      </Route>
      <Route path="/latest">
        <LatestPage />
      </Route>
      <Route path="/national_news">
        <NationalNewsPage />
      </Route>
      <Route path="/politics">
        <PoliticsPage />
      </Route>
      <Route path="/russia">
        <RussiaPage />
      </Route>
      <Route path="/suppressed_news">
        <SuppressedNewsPage />
      </Route>
      <Route path="/unbelievable">
        <UnbelievablePage />
      </Route> */}
    </SideBarMenu>
  );
};

export default NavigationPc;
