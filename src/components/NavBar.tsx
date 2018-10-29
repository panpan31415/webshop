import * as React from "react";

const NavBar = () => {
  window.addEventListener("scroll", scrollToFixed);
  return (
    <nav className="nav-bar" id="nav-bar">
      <section>
        <ul className="nav-bar__list">
          <a className="nav-bar__logo">
            <img src="images/icons/logo-01.png" alt="LOGO" />
          </a>
          <li className="nav-bar__item">
            <a href="">home</a>
          </li>
          <li className="nav-bar__item">
            <a href="">Products</a>
          </li>
          <li className="nav-bar__item">
            <a href="">about</a>
          </li>
          <li className="nav-bar__item">
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="nav-bar__icon-group">
          <div className="nav-bar__icon">
            <svg>
              <use xlinkHref="images/icons/symbol-defs.svg#icon-search" />
            </svg>
          </div>
          <div className="nav-bar__icon">
            <svg>
              <use xlinkHref="images/icons/symbol-defs.svg#icon-shopping-cart" />
            </svg>
          </div>
          <div className="nav-bar__icon">
            <svg>
              <use xlinkHref="images/icons/symbol-defs.svg#icon-heart-o" />
            </svg>
          </div>
        </div>
      </section>
    </nav>
  );
};

const scrollToFixed = () => {
  const navbar: HTMLElement | null = document.getElementById("nav-bar");
  const Y = window.scrollY;
  if (navbar !== null && Y !== 0) {
    navbar.classList.add("nav-bar--fixed");
  } else if (navbar !== null && Y === 0) {
    navbar.classList.remove("nav-bar--fixed");
  }
};
export default NavBar;
