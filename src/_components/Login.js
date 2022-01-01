import styled from "styled-components";

const LoginContainer = styled.div`
  width: 30%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: green;
`;

const LoginForm = styled.form`
  background-color: teal;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  & h2 {
    text-align: center;
    padding: 1.6rem 0 0 0;
  }
`;

const LoginFormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  //   padding: 1.6rem;
  width: 60%;
`;

const LoginFormLinkGroup = styled.div`
  display: flex;
  gap: 3.2rem;
`;

const LoginFormBtnGroup = styled.div`
  padding: 1.6rem 0;
  display: flex;
  gap: 3.2rem;
`;
const Login = (props) => {
  return (
    <LoginContainer style={props.logInModalStyle}>
      <LoginForm>
        <h2>Login</h2>
        <LoginFormInputGroup>
          <label htmlFor="login-email">Email</label>
          <input type="email" name="login-email" id={props.logInEmailId} />
          <label htmlFor="login-password">Password</label>
          <input type="password" name="login-password" id="login-password" />
        </LoginFormInputGroup>
        <LoginFormLinkGroup>
          <a href="">Don't have an account?</a>
          <a href="">Forgot you password?</a>
        </LoginFormLinkGroup>
        <LoginFormBtnGroup>
          <button
            type="button"
            className="btn"
            onClick={props.logInSubmitClick}
          >
            Login
          </button>
          <button
            type="button"
            className="btn"
            onClick={props.logInCancelClick}
          >
            Cancel
          </button>
        </LoginFormBtnGroup>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
