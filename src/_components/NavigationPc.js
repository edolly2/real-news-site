import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarMenu = styled.aside`
  width: 25vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 500ms linear;
`;

const SideBarNav = styled.nav`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: 2px solid rgb(0, 0, 0);
  border-left: none;
  backdrop-filter: blur(10px);
  // position: relative;
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
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: 2px solid rgb(0, 0, 0);
  border-left: 2px solid #4c4c4c;
  // backdrop-filter: blur(10px);
  position: absolute;
  left: calc(25vw - 3px);
  top: 50%;
  transform: translate(0, -50%);
  width: 3.2rem;
  //   height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top-right-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
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
          <Link className="Links active" exact to="/">
            <li>Home</li>
          </Link>
          <Link className="Links" to="/latest">
            <li>Latest News</li>
          </Link>

          <Link className="Links" to="/national-news">
            <li>National News</li>
          </Link>
          <Link className="Links" to="/international-news">
            <li>International News</li>
          </Link>
          <Link className="Links" to="/fact-check">
            <li>Fact Check</li>
          </Link>
          <Link className="Links" to="/archives">
            <li>Archives</li>
          </Link>
        </SideBarNavList>
      </SideBarNav>
    </SideBarMenu>
  );
};

export default NavigationPc;
