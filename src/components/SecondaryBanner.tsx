import * as React from "react";

const SecondaryBanner: React.SFC = () => {
  return (
    <div className="sec-banner">
      <section>
        <div className="sec-banner__item">
          <h2 className="sec-banner__item-title">Women</h2>
          <p className="sec-banner__item-season">Spring 2018</p>
          <button className="sec-banner__button">
            <span className="sec-banner__button-text">Shop now</span>
          </button>
          <img src={require("../images/banner-01.jpg")} alt="IMG-BANNER" />
        </div>
        <div className="sec-banner__item">
          <h2 className="sec-banner__item-title">Men</h2>
          <p className="sec-banner__item-season">Spring 2018</p>
          <button className="sec-banner__button">
            <span className="sec-banner__button-text">Shop now</span>
          </button>
          <img src={require("../images/banner-02.jpg")} alt="IMG-BANNER" />
        </div>
        <div className="sec-banner__item">
          <h2 className="sec-banner__item-title">Accessories</h2>
          <p className="sec-banner__item-season">New Trend</p>{" "}
          <button className="sec-banner__button">
            <span className="sec-banner__button-text">Shop now</span>
          </button>
          <img src={require("../images/banner-03.jpg")} alt="IMG-BANNER" />
        </div>{" "}
      </section>
    </div>
  );
};

export default SecondaryBanner;
