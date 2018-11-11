import * as React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { IAuthentication } from "src/reducers/stateTypes";

const Login: React.SFC<{
  login: () => void;
  authentication: IAuthentication;
}> = ({ login, authentication }) => {
  if (authentication.loginStatus) {
    return <Redirect to={"/home"} />;
  } else {
    return (
      <div className="login">
        <section>
          <div className="login__dialog">
            <h3 className="login__title">User login</h3>
            <div className="login__input">
              <label>User Name:</label>
              <input
                type="text"
                placeholder="user name"
                value="admin"
                disabled
              />
            </div>
            <div className="login__input">
              <label>Password:</label>
              <input
                type="password"
                placeholder="password"
                value="admin"
                disabled
              />
            </div>
            <div className="login__buttons">
              <Link to="/login" onClick={login}>
                Login
              </Link>

              <Link to={"/"}>Cancel</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Login;
