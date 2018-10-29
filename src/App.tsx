import * as React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SecondaryBanner from "./components/SecondaryBanner";
import TopBaner from "./components/TopBanner";
import TopBar from "./components/TopBar";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TopBar />
        <NavBar />
        <TopBaner />
        <SecondaryBanner />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
