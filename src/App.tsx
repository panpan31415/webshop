import * as RA_RE from "react-redux";
import * as React from "react";
import * as Redux from "redux";

import Footer from "./components/Footer";
import Header from "./components/NavBar";
import Products from "./components/Products";
import SecondaryBanner from "./components/SecondaryBanner";
import TopBaner from "./components/TopBanner";
import { loadProduct, setfilter } from "./actions";

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
          category={this.props.category}
          products={this.props.products}
          setfilter={this.props.setfilter}
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
    changeCategory: (event: React.MouseEvent) => {
      dispatch(setfilter(event));
    }
  };
}

export default RA_RE.connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
