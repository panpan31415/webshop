import * as Redux from "redux";
import {
  LOAD_PRODUCTS_PENDING,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
  FILTER_PRODUCTS_BY_CATEGORY,
  TOGGLE_FILTER_BUTTON,
  TOGGLE_SEARCH_BUTTON,
  FILTER_PRODUCTS_BY_SORTING,
  FILTER_PRODUCTS_BY_PRICE_INTERVAL,
  FILTER_PRODUCTS_BY_USER_INPUT
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

export const setfilterByCategory = (event: React.MouseEvent) => {
  if (event.currentTarget.attributes["data-category"]) {
    let filterValue = event.currentTarget.attributes["data-category"].value;
    return { type: FILTER_PRODUCTS_BY_CATEGORY, payload: filterValue };
  } else {
    return { type: "UNKNOWN", payload: null };
  }
};

export const setfilterBySorting = (event: React.MouseEvent) => {
  if (event.currentTarget.attributes["data-sort"]) {
    let sortType = event.currentTarget.attributes["data-sort"].value;
    return {
      type: FILTER_PRODUCTS_BY_SORTING,
      payload: sortType
    };
  } else {
    return { type: "UNKNOWN", payload: null };
  }
};

export const setFilterByPriceInterval = (event: React.MouseEvent) => {
  if (event.currentTarget.attributes["data-price-interval"]) {
    let priceInterval =
      event.currentTarget.attributes["data-price-interval"].value;
    return {
      type: FILTER_PRODUCTS_BY_PRICE_INTERVAL,
      payload: priceInterval
    };
  } else {
    return { type: "UNKNOWN", payload: null };
  }
};

export const setFilterByUserInput = (
  event: React.FormEvent<HTMLInputElement>
) => {
  const userInput = event.currentTarget.value;
  return {
    type: FILTER_PRODUCTS_BY_USER_INPUT,
    payload: userInput
  };
};

export const toggleFilterButton = (event: React.MouseEvent) => {
  return {
    type: TOGGLE_FILTER_BUTTON
  };
};
export const toggleSearchButton = (event: React.MouseEvent) => {
  return {
    type: TOGGLE_SEARCH_BUTTON
  };
};
