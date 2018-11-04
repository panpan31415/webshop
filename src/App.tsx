import * as RA_RE from "react-redux";
import * as React from "react";
import * as Redux from "redux";

import Footer from "./components/Footer";
import Header from "./components/NavBar";
import Products from "./components/Products";
import SecondaryBanner from "./components/SecondaryBanner";
import TopBaner from "./components/TopBanner";
import {
  loadProduct,
  setfilterByCategory,
  toggleFilterButton,
  toggleSearchButton,
  setfilterBySorting,
  setFilterByPriceInterval,
  setFilterByUserInput
} from "./actions";

interface IProps {
  loadProduct: Redux.Action;
  catogery: Redux.Action;
}
class App extends React.Component<any, IProps> {
  public render() {
    return (
      <div className="App">
        <Header />
        <TopBaner />
        <SecondaryBanner />
        <Products
          filter={this.props.filter}
          products={this.props.products}
          setfilterByCategory={this.props.setfilterByCategory}
          toggleFilterButton={this.props.toggleFilterButton}
          toggleSearchButton={this.props.toggleSearchButton}
          setfilterBySorting={this.props.setfilterBySorting}
          setFilterByPriceInterval={this.props.setFilterByPriceInterval}
          setFilterByUserInput={this.props.setFilterByUserInput}
          UIElements={this.props.UIElements}
        />
        <Footer />
      </div>
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
    }
  };
}

export default RA_RE.connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
