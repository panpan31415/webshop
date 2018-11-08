import * as React from "react";
import { IAuthentication } from "../reducers/stateTypes";

const TopBar: React.SFC<{
  authentication: IAuthentication;
  login: () => void;
  logout: () => void;
}> = ({ authentication, login, logout }) => {
  const welcome = authentication.loginStatus
    ? `Welcome ${authentication.user.userName} , Sign Out`
    : "Sign In";

  const logging = authentication.loginStatus ? logout : login;
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
          <div className="topbar__link" onClick={logging}>
            {welcome}
          </div>
          <div className="topbar__link">EN</div>
          <div className="topbar__link">DKK</div>
        </div>
      </section>
    </div>
  );
};
export default TopBar;
