import * as React from "react";

const Footer: React.SFC = () => {
  return (
    <div className="footer">
      <section>
        <div>
          <h3 className="footer__heading">Categories</h3>
          <ul className="footer__list">
            <li>Women</li>
            <li>Man</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Help</h3>
          <ul className="footer__list">
            <li>Tracke Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="footer__heading">Get In Touch</h3>
          <p className="footer__text">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            Copenhagen, CPH 10000 or call us on +45 12 34 56 78
          </p>
          <div className="footer__social-medias">
            <div className="footer__social-medias__icon">
              <svg>
                <use xlinkHref="images/icons/symbol-defs.svg#icon-facebook" />
              </svg>
            </div>
            <div className="footer__social-medias__icon">
              <svg>
                <use xlinkHref="images/icons/symbol-defs.svg#icon-instagram" />
              </svg>
            </div>
            <div className="footer__social-medias__icon">
              <svg>
                <use xlinkHref="images/icons/symbol-defs.svg#icon-pinterest" />
              </svg>
            </div>
            <div className="footer__social-medias__icon">
              <svg>
                <use xlinkHref="images/icons/symbol-defs.svg#icon-google" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer__heading">NewsLetter</h3>
          <input
            type="text"
            placeholder="email@example.com"
            className="footer__input"
          />
          <hr className="footer__input-under-line" />
          <button className="round-corner-button footer__subscribe-btn">
            Subscribe
          </button>
        </div>
        <div className="footer__payment">
          <ul className="footer__payment-list">
            <li>
              <a href="#">
                <img src="images/icons/icon-pay-01.png" alt="ICON-PAY" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icons/icon-pay-02.png" alt="ICON-PAY" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icons/icon-pay-03.png" alt="ICON-PAY" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icons/icon-pay-04.png" alt="ICON-PAY" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icons/icon-pay-05.png" alt="ICON-PAY" />
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">
          Copyright ©2018 All rights reserved | This template is made with
          <span className="footer__copyright--heart">
            <svg>
              <use xlinkHref="images/icons/symbol-defs.svg#icon-heart-o" />
            </svg>
          </span>{" "}
          by
          <a
            href="https://colorlib.com"
            target="_blank"
            className="footer__copyright--link"
          >
            Colorlib
          </a>
          . this template is re-edited by{" "}
          <a href="http://panpan.dk/" className="footer__copyright--link">
            Panpan Zhang
          </a>{" "}
          with React for pratice purpose
        </p>
      </section>
    </div>
  );
};

export default Footer;
