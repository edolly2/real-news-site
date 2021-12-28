import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";

const UserMenuContainer = styled.aside`
  background-color: red;
  width: 20rem;
  height: 40rem;
  margin-left: auto;
  padding: 1.6rem;
  position: relative;
  & nav {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-bottom: 1.6rem;
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
  background-color: brown;
  & form {
    text-align: center;
  }
`;
const UserMenu = () => {
  return (
    <UserMenuContainer>
      <ProfileImageContainer>
        <FaUserCircle />
        <p>Not signed in</p>
      </ProfileImageContainer>
      <nav>
        <ul>
          <li>Login</li>
          <li>Sign-up</li>
          <li>Donate</li>
        </ul>
      </nav>
      <FormContainer>
        <form>
          <label htmlFor="subscribe">Want our newsletter?</label>
          <input type="email" name="subscribe" />
          <button className="btn">Subscribe</button>
        </form>
      </FormContainer>
    </UserMenuContainer>
  );
};

export default UserMenu;
