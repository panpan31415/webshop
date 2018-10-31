import * as React from "react";

const TopBar: React.SFC = () => {
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
          <div className="topbar__link">My Account</div>
          <div className="topbar__link">EN</div>
          <div className="topbar__link">DKK</div>
        </div>
      </section>
    </div>
  );
};
export default TopBar;
