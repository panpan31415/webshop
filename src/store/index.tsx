import * as Redux from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";

const store: Redux.Store = Redux.createStore(
  reducer,
  Redux.applyMiddleware(thunk)
);
export default store;
