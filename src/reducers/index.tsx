import * as Redux from "redux";
import products from "./products";
import filter from "./filter";
import UIElements from "./UIElements";
import authentication from "./authentication";
import user from "./user";
const reducer = Redux.combineReducers({
  products,
  filter,
  authentication,
  UIElements,
  user
});

export default reducer;
