import * as React from "react";

const TopBaner = () => {
  return (
    <div
      className="top-banner"
      style={{ backgroundImage: "url(images/slide-01.jpg)" }}
    >
      <button className="top-banner__arrow-btn top-banner__arrow-btn--left">
        {""}
      </button>
      <button className="top-banner__arrow-btn top-banner__arrow-btn--right">
        {""}
      </button>
      <section>
        <p className="top-banner__title">
          <span> {"Women Collection 2018"}</span>
        </p>
        <p className="top-banner__banner-text">
          <span>{"New Season"}</span>
        </p>
        <button className="round-corner-button top-banner__button">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default TopBaner;
