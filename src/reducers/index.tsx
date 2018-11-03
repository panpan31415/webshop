import * as Redux from "redux";
import products from "./products";
import filter from "./filter";

const reducer = Redux.combineReducers({ products, filter });

export default reducer;
