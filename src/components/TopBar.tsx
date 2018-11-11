import * as React from "react";
import { IAuthentication } from "../reducers/stateTypes";
import { Link } from "react-router-dom";

const TopBar: React.SFC<{
  authentication: IAuthentication;
  login: () => void;
  logout: () => void;
}> = ({ authentication, logout }) => {
  const welcomeText = authentication.loginStatus
    ? `Welcome ${authentication.user.userName} , Sign Out`
    : "Sign In";
  const logging = authentication.loginStatus ? logout : () => {};
  return (
    <div className="topbar">
      <section className="topbar__section">
        <div className="topbar__promotion-text">
          Free shipping for standard order over 2000 kr.
        </div>
        <div className="topbar__link-group">
          <div className="topbar__link">
            Help
            {"&"}
            FAQs
          </div>
          <div className="topbar__link">
            <Link
              to={{
                pathname: "/login",
                state: {
                  from: "/",
                  loginStatus: authentication.loginStatus
                }
              }}
              onClick={logging}
            >
              {welcomeText}
            </Link>
          </div>
          <div className="topbar__link">EN</div>
          <div className="topbar__link">DKK</div>
        </div>
      </section>
    </div>
  );
};
export default TopBar;
