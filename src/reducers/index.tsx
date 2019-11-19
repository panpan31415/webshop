import * as Redux from "redux";
import products from "./products";
import filter from "./filter";
import UIElements from "./UIElements";
import authentication from "./authentication";
import user from "./user";
import payment from "./payment";
const reducer = Redux.combineReducers({
  products,
  filter,
  authentication,
  UIElements,
  user,
  payment
});

export default reducer;
