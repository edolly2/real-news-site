import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";

const UserMenuContainer = styled.aside`
  background-color: red;
  width: 20rem;
  height: 40rem;
  position: absolute;
  right: 0;
  padding: 1.6rem;
  transition: all 500ms linear;
  & nav {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 1.6rem;
  }
  & li:hover {
    cursor: pointer;
    background-color: black;
    color: red;
  }
`;
const ProfileImageContainer = styled.div`
  font-size: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 1.6rem;
  & p {
    font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
  }
`;

const FormContainer = styled.div`
  position: absolute;
  bottom: 1.6rem;
  right: 1.6rem;
  left: 1.6rem;
  background-color: brown;
  & form {
    text-align: center;
  }
`;
const UserMenu = (props) => {
  return (
    <UserMenuContainer style={props.userMenuStyle}>
      <ProfileImageContainer>
        <FaUserCircle />
        <p>{props.signedInTextValue}</p>
      </ProfileImageContainer>
      <nav>
        <ul>
          <li
            onClick={props.logInMenuItemClick}
            style={props.logInMenuItemStyle}
          >
            Log-In
          </li>

          <li
            onClick={props.signUpMenuItemClick}
            style={props.signUpMenuItemStyle}
          >
            Sign-Up
          </li>

          <li>Donate</li>

          <li
            onClick={props.logOutMenuItemClick}
            style={props.logOutMenuItemStyle}
          >
            Log-Out
          </li>
        </ul>
      </nav>
      <FormContainer>
        <form id="subscribe-form">
          <label htmlFor="subscribe">Get our newsletter!</label>
          <input type="email" name="subscribe" placeholder="E-mail" />
          <button className="btn" onClick={props.subscribeBtnClick}>
            Subscribe
          </button>
        </form>
      </FormContainer>
    </UserMenuContainer>
  );
};

export default UserMenu;
