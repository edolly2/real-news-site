import { FaBell, FaSearch, FaUserAlt } from "react-icons/fa";
import React, { useState } from "react";

import { BsEnvelopeFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import logo from "../_assets/elephant_logo.png";
import styled from "styled-components";

const PageHeader = styled.header`
  background-color: pink;
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

const SiteBrand = styled.div`
  display: flex;
  align-items: flex-end;
`;

const HeaderIcons = styled.div`
  display: flex;
  gap: 1.6rem;
  font-size: 2.4rem;
  align-items: flex-end;
  & svg:hover {
    cursor: pointer;
  }
`;

const SiteBrandLogo = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 90px;
  height: 90px;
`;

const SiteBrandText = styled.p`
  margin-left: -1.6rem;
  font-weight: 900;
  text-transform: uppercase;
`;

const SearchBarContainer = styled.div`
  width: 750px;
  text-align: center;
  & input {
    width: 50%;
    font-size: 1.8rem;
    padding: 0.2rem 0.4rem;
  }
  & button {
    font-size: 1.8rem;
    padding: 0.2rem 1.6rem;
    cursor: pointer;
  }
`;

// const MainMenuIcon = styled.div`
//   margin-left: 3.2rem;
//   font-size: 3.2rem;
//   background-color: red;
// `;
function getCurrentDate() {
  let myCurrentDate = new Date();
  let date = myCurrentDate.getDate();
  let month = myCurrentDate.getMonth() + 1;
  let year = myCurrentDate.getFullYear();

  return `${month}/${date}/${year}`;
}

const Header = (props) => {
  const [searchBarActive, setSearchBarActive] = useState(false);

  return (
    <PageHeader>
      <SiteBrand>
        <SiteBrandLogo></SiteBrandLogo>
        <SiteBrandText>The Cognizant</SiteBrandText>
      </SiteBrand>
      <SearchBarContainer
        style={{ display: searchBarActive ? "block" : "none" }}
      >
        <input type="search" name="search-bar" />
        <button className="search-bar-btn" type="submit">
          Search
        </button>
      </SearchBarContainer>
      <div className="date">{getCurrentDate()}</div>
      <HeaderIcons>
        <FaSearch onClick={() => setSearchBarActive(!searchBarActive)} />
        <FaBell style={props.bellStyle} />
        <BsEnvelopeFill style={props.envelopeStyle} />
        <FaUserAlt onClick={props.userIconClick} />
        {/* <MainMenuIcon>
          <CgMenuGridR />
        </MainMenuIcon> */}
      </HeaderIcons>
    </PageHeader>
  );
};

export default Header;
