import * as React from "react";
import Footer from "./components/Footer";
import Header from "./components/NavBar";
import Products from "./components/Products";
import SecondaryBanner from "./components/SecondaryBanner";
import TopBaner from "./components/TopBanner";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <TopBaner />
        <SecondaryBanner />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
