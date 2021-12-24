import "./Header.css";

import { FaBell, FaSearch, FaUserAlt } from "react-icons/fa";
import React, { useState } from "react";

import { BsEnvelopeFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import logo from "../_assets/elephant_logo.png";
import styled from "styled-components";

const Header = () => {
  const PageHeader = styled.header`
    background-color: pink;
    padding: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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

  const [searchBarActive, setSearchBarActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <PageHeader>
      <SiteBrand>
        <SiteBrandLogo></SiteBrandLogo>
        <SiteBrandText>Dependent Elephant</SiteBrandText>
      </SiteBrand>
      <div
        className="search-bar-cont"
        style={{ display: searchBarActive ? "block" : "none" }}
      >
        <input type="search" name="search-bar" />
        <button className="search-bar-btn" type="submit">
          Search
        </button>
      </div>
      <HeaderIcons>
        <FaSearch onClick={() => setSearchBarActive(!searchBarActive)} />
        <FaBell style={{ display: isLoggedIn ? "block" : "none" }} />
        <BsEnvelopeFill style={{ display: isLoggedIn ? "block" : "none" }} />
        <FaUserAlt />
        {/* <CgMenuGridR className="main-menu-icon" /> */}
      </HeaderIcons>
    </PageHeader>
  );
};

export default Header;
