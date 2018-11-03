import * as React from "react";
import HamburgButton from "./HamburgButton";
import TopBar from "./TopBar";

interface IState {
  hanbrugBtnActive: boolean;
}

class Header extends React.Component<any, IState> {
  private navBar = React.createRef<HTMLDivElement>();
  constructor(props: any) {
    super(props);
    this.state = {
      hanbrugBtnActive: false
    };
    this.onHambrugBtnClicked = this.onHambrugBtnClicked.bind(this);
  }
  /**
   * UI level events
   */
  public scrollToFixed() {
    const navbar: HTMLElement | null = document.getElementById("nav-bar");
    const Y = window.scrollY;
    if (window.innerWidth >= 768) {
      if (navbar !== null && Y !== 0) {
        navbar.classList.add("nav-bar--fixed");
      } else if (navbar !== null && Y === 0) {
        navbar.classList.remove("nav-bar--fixed");
      }
    }
  }

  public onHambrugBtnClicked(event: React.MouseEvent<HTMLButtonElement>): void {
    const currentStatus = this.state.hanbrugBtnActive;
    this.setState({ hanbrugBtnActive: !currentStatus });
  }
  public componentDidMount() {
    window.addEventListener("scroll", this.scrollToFixed);
  }

  public render() {
    let navbarListActive = "";
    if (this.state.hanbrugBtnActive) {
      navbarListActive = "nav-bar__list--active";
    } else {
      navbarListActive = "";
    }
    return (
      <div className="header">
        <TopBar />
        <nav className="nav-bar" id="nav-bar" ref={this.navBar}>
          <section className="nav-bar__section">
            <a className="nav-bar__logo">
              <img src="images/icons/logo-01.png" alt="LOGO" />
            </a>
            <ul
              className={`nav-bar__list ${navbarListActive}`}
              id="nav-bar__list"
            >
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
              <div className="nav-bar__icon nav-bar__hambrug_icon">
                <HamburgButton
                  active={this.state.hanbrugBtnActive}
                  onClick={this.onHambrugBtnClicked}
                />
              </div>
            </div>
          </section>
        </nav>
      </div>
    );
  }
}

export default Header;
