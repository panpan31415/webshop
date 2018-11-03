import * as Redux from "redux";
import {
  LOAD_PRODUCTS_PENDING,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL
} from "../actions/type";

const Products: Redux.Reducer<{}, { type: string; payload: any }> = (
  products: {} = {},
  action: { type: string; payload: any } = { type: "", payload: {} }
) => {
  switch (action.type) {
    case LOAD_PRODUCTS_PENDING: {
      console.log("start loading...");
      return products;
    }
    case LOAD_PRODUCTS_SUCCESS: {
      console.log("loading success");
      return action.payload;
    }
    case LOAD_PRODUCTS_FAIL: {
      console.log("start loading failed");
      return products;
    }
    default: {
      return products;
    }
  }
};

export default Products;
