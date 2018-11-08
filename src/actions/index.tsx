import * as Redux from "redux";
import store from "../store";
import {
  LOAD_PRODUCTS_PENDING,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
  FILTER_PRODUCTS_BY_CATEGORY,
  TOGGLE_FILTER_BUTTON,
  TOGGLE_SEARCH_BUTTON,
  FILTER_PRODUCTS_BY_SORTING,
  FILTER_PRODUCTS_BY_PRICE_INTERVAL,
  FILTER_PRODUCTS_BY_USER_INPUT,
  AUTHENICATION_REQUEST_PENDING,
  AUTHENICATION_REQUEST_FAIL,
  AUTHENICATION_REQUEST_SUCCESS,
  LOGOUT,
  OPEN_SHOPPINGCART_SIDEBAR,
  CLOSE_SHOPPINGCART_SIDEBAR,
  ADD_PRODUCT,
  MIUNS_PRODUCT,
  TOGGLE_FAV
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

const LOGIN_API = "https://api.myjson.com/bins/gj2y6";
export const login = () => (dispatch: Redux.Dispatch<Redux.Action>) => {
  dispatch({ type: AUTHENICATION_REQUEST_PENDING });
  fetch(LOGIN_API)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: AUTHENICATION_REQUEST_SUCCESS, payload: data });
    })
    .catch(err =>
      dispatch({
        type: AUTHENICATION_REQUEST_FAIL,
        payload: err
      })
    );
};
export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const openSideBar = () => {
  if (store.getState().authentication.loginStatus) {
    return {
      type: OPEN_SHOPPINGCART_SIDEBAR
    };
  } else {
    return {
      type: "INVALID_OPEARTION",
      payload: "you need login to view shoppingcart"
    };
  }
};

export const addProduct = (event: React.MouseEvent) => {
  const productId = event.currentTarget.attributes["data-product-id"].value;
  if (store.getState().authentication.loginStatus) {
    return {
      type: ADD_PRODUCT,
      payload: productId
    };
  } else {
    return {
      type: "INVALID_OPEARTION",
      payload: "you need login to add product "
    };
  }
};

export const minusProduct = (event: React.MouseEvent) => {
  const productId = event.currentTarget.attributes["data-product-id"].value;
  if (store.getState().authentication.loginStatus) {
    return {
      type: MIUNS_PRODUCT,
      payload: productId
    };
  } else {
    return {
      type: "INVALID_OPEARTION",
      payload: "you need login to delete product "
    };
  }
};

export const closeSideBar = () => {
  return {
    type: CLOSE_SHOPPINGCART_SIDEBAR
  };
};

export const toggleFav: Redux.ActionCreator<{
  type: string;
  payload: { productId: string; favorite: boolean } | string;
}> = (productId, favorite) => {
  if (store.getState().authentication.loginStatus) {
    return {
      type: TOGGLE_FAV,
      payload: { productId, favorite }
    };
  } else {
    return {
      type: "INVALID_OPEARTION",
      payload: "you need login to add favorite items "
    };
  }
};
