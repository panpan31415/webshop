import * as Redux from "redux";
import products from "./products";
import filter from "./filter";
import UIElements from "./UIElements";

const reducer = Redux.combineReducers({ products, filter, UIElements });

export default reducer;
