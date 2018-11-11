import * as React from "react";
import HamburgButton from "./HamburgButton";
import TopBar from "./TopBar";
import {
  IAuthentication,
  IUser,
  lUIElementsState
} from "../reducers/stateTypes";
import ShopingcartSidePanel from "./ShopingcartSidePanel";
import { NavLink } from "react-router-dom";

interface IState {
  hanbrugBtnActive: boolean;
}
interface IProps {
  authentication: IAuthentication;
  user: IUser;
  login: () => void;
  logout: () => void;
  UIElements: lUIElementsState;
  openSideBar: () => void;
  closeSideBar: () => void;
  products: {};
  minusProduct: (event: React.MouseEvent) => void;
}
class Header extends React.Component<IProps, IState, any> {
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

    let itemQuantityInShopingCart = this.props.user.shopingCart.reduce(
      (acc, sItem) => {
        return acc + sItem.quantity;
      },
      0
    );

    return (
      <div className="header">
        <TopBar
          authentication={this.props.authentication}
          login={this.props.login}
          logout={this.props.logout}
        />
        <nav className="nav-bar" id="nav-bar" ref={this.navBar}>
          <section className="nav-bar__section">
            <NavLink exact className="nav-bar__logo" to={`/`}>
              <img src={require("../images/icons/logo-01.png")} alt="LOGO" />
            </NavLink>
            <ul
              className={`nav-bar__list ${navbarListActive}`}
              id="nav-bar__list"
            >
              <li className="nav-bar__item">
                <NavLink
                  exact
                  to={`/home`}
                  activeClassName="nav-bar__item--active"
                >
                  home
                </NavLink>
              </li>
              <li className="nav-bar__item">
                <NavLink
                  to={`/products`}
                  activeClassName="nav-bar__item--active"
                >
                  products
                </NavLink>
              </li>
              <li className="nav-bar__item">
                <NavLink to={`/about`} activeClassName="nav-bar__item--active">
                  about
                </NavLink>
              </li>
              <li className="nav-bar__item">
                <NavLink
                  to={`/contact`}
                  activeClassName="nav-bar__item--active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="nav-bar__icon-group">
              <div className="nav-bar__icon">
                <svg>
                  <use xlinkHref="images/icons/symbol-defs.svg#icon-search" />
                </svg>
              </div>
              <div
                className={`nav-bar__icon ${
                  this.props.UIElements.shoppingcart.button
                    ? "shoppingcart--active"
                    : ""
                }`}
                onClick={this.props.openSideBar}
              >
                <span
                  className={`notification ${
                    itemQuantityInShopingCart > 0 ? "notification--active" : ""
                  }`}
                >
                  {itemQuantityInShopingCart}
                </span>
                <svg>
                  <use
                    xlinkHref={`${require("../images/icons/symbol-defs.svg") +
                      "#icon-shopping-cart"}`}
                  />
                </svg>
              </div>
              <div className="nav-bar__icon">
                <span
                  className={`notification ${
                    this.props.user.favorite.length > 0
                      ? "notification--active"
                      : ""
                  }`}
                >
                  {this.props.user.favorite.length}
                </span>
                <svg>
                  <use
                    xlinkHref={`${require("../images/icons/symbol-defs.svg") +
                      "#icon-heart-o"}`}
                  />
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
        <ShopingcartSidePanel
          visible={
            this.props.UIElements.shoppingcart.button &&
            this.props.authentication.loginStatus
          }
          close={this.props.closeSideBar}
          user={this.props.user}
          products={this.props.products}
          minusProduct={this.props.minusProduct}
        />
      </div>
    );
  }
}

export default Header;
