import * as RA_RE from "react-redux";
import * as React from "react";
import * as Redux from "redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import SecondaryBanner from "./components/SecondaryBanner";
import TopBaner from "./components/TopBanner";
import * as _ from "lodash";
import Login from "./components/Login";

import {
  loadProduct,
  setfilterByCategory,
  toggleFilterButton,
  toggleSearchButton,
  setfilterBySorting,
  setFilterByPriceInterval,
  setFilterByUserInput,
  login,
  logout,
  openSideBar,
  closeSideBar,
  addProduct,
  minusProduct,
  toggleFav,
} from "./actions";

class App extends React.Component<any, any> {
  public render() {
    return (
      <Router basename="/">
        <div className="App">
          <Header
            authentication={this.props.authentication}
            login={this.props.login}
            logout={this.props.logout}
            user={this.props.user}
            UIElements={this.props.UIElements}
            openSideBar={this.props.openSideBar}
            closeSideBar={this.props.closeSideBar}
            products={this.props.products}
            minusProduct={this.props.minusProduct}
          />
          <Switch>
            <Route
              path="/home"
              exact={true}
              render={() => {
                return (
                  <React.Fragment>
                    <TopBaner />
                    <SecondaryBanner />
                    <div style={{ marginTop: "8rem" }} />
                  </React.Fragment>
                );
              }}
            />
            <Route
              path="/products"
              render={({ match }) => {
                return (
                  <Products
                    filter={this.props.filter}
                    products={this.props.products}
                    setfilterByCategory={this.props.setfilterByCategory}
                    toggleFilterButton={this.props.toggleFilterButton}
                    toggleSearchButton={this.props.toggleSearchButton}
                    setfilterBySorting={this.props.setfilterBySorting}
                    setFilterByPriceInterval={
                      this.props.setFilterByPriceInterval
                    }
                    setFilterByUserInput={this.props.setFilterByUserInput}
                    UIElements={this.props.UIElements}
                    addProduct={this.props.addProduct}
                    user={this.props.user}
                    toggleFav={this.props.toggleFav}
                    match={match}
                  />
                );
              }}
            />
            <Route
              path={"/"}
              exact
              render={() => {
                return <Redirect to={"/home"} />;
              }}
            />
            <Route
              path={"/login"}
              render={() => (
                <Login
                  login={this.props.login}
                  authentication={this.props.authentication}
                />
              )}
            />
            <Route
              path={"/about"}
              render={() => (
                <section style={{ height: "800px" }}>
                  <h3>About page</h3>
                </section>
              )}
            />
            <Route
              path={"/contact"}
              render={() => (
                <section style={{ height: "800px" }}>
                  <h3>Contace page</h3>
                </section>
              )}
            />
            <Route
              render={() => {
                return (
                  <section className="pageNotFound">
                    {" "}
                    <h3>Page not found :( </h3>{" "}
                  </section>
                );
              }}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

  public componentDidMount() {
    this.props.loadProduct();
  }
}

function mapStateToProps(state: {}) {
  return state;
}

function mapDispatchToProps(dispatch: Redux.Dispatch) {
  return {
    loadProduct: () => {
      loadProduct()(dispatch);
    },
    setfilterByCategory: (event: React.MouseEvent) => {
      dispatch(setfilterByCategory(event));
    },
    setfilterBySorting: (event: React.MouseEvent) => {
      dispatch(setfilterBySorting(event));
    },
    setFilterByPriceInterval: (event: React.MouseEvent) => {
      dispatch(setFilterByPriceInterval(event));
    },
    setFilterByUserInput: (event: React.FormEvent<HTMLInputElement>) => {
      dispatch(setFilterByUserInput(event));
    },
    toggleFilterButton: (event: React.MouseEvent) => {
      dispatch(toggleFilterButton(event));
    },
    toggleSearchButton: (event: React.MouseEvent) => {
      dispatch(toggleSearchButton(event));
    },
    login: () => {
      login()(dispatch);
    },
    logout: () => {
      dispatch(logout());
    },
    openSideBar: () => {
      dispatch(openSideBar());
    },
    closeSideBar: () => {
      dispatch(closeSideBar());
    },
    addProduct: (event: React.MouseEvent) => {
      dispatch(addProduct(event));
    },
    minusProduct: (event: React.MouseEvent) => {
      dispatch(minusProduct(event));
    },
    toggleFav: (productId: string, favorite: boolean) => {
      dispatch(toggleFav(productId, favorite));
    },
  };
}

export default RA_RE.connect(mapStateToProps, mapDispatchToProps)(App);
