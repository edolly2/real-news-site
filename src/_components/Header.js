import "./Header.css";

import { FaBell, FaSearch, FaUserAlt } from "react-icons/fa";
import React, { useState } from "react";

import { BsEnvelopeFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
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

  const [searchBarActive, setSearchBarActive] = useState(false);
  return (
    <PageHeader>
      <SiteBrand>
        <div className="site-brand-logo"></div>
        <h1 className="site-brand-text">Dependent Elephant</h1>
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
        <FaBell />
        <BsEnvelopeFill />
        <FaUserAlt />
        {/* <CgMenuGridR className="main-menu-icon" /> */}
      </HeaderIcons>
    </PageHeader>
  );
};

export default Header;
