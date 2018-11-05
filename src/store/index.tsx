import * as Redux from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
// import logger from "redux-logger";

const store: Redux.Store = Redux.createStore(
  reducer,
  // Redux.applyMiddleware(thunk, logger)
  Redux.applyMiddleware(thunk)
);
export default store;
