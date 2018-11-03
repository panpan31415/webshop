import * as Redux from "redux";
import {
  LOAD_PRODUCTS_PENDING,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
  FILTER_PRODUCTS_BY_CATEGORY
} from "./type";
const PRODUCTS_API = "https://api.myjson.com/bins/1gdxmm";
export const loadProduct = () => (dispatch: Redux.Dispatch<Redux.Action>) => {
  dispatch({ payload: null, type: LOAD_PRODUCTS_PENDING });
  fetch(PRODUCTS_API)
    .then(reponse => reponse.json())
    .then(data => {
      dispatch({ payload: data, type: LOAD_PRODUCTS_SUCCESS });
    })
    .catch(err => {
      dispatch({
        payload: err,
        type: LOAD_PRODUCTS_FAIL
      });
    });
};

export const setfilter = (category: string) => {
  return { type: FILTER_PRODUCTS_BY_CATEGORY, payload: category };
};
