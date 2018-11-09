import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import store from "./store";
// import { Router, browserHistory } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
