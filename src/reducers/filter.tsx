import {
  TOGGLE_FILTER_BUTTON,
  TOGGLE_SEARCH_BUTTON,
  FILTER_PRODUCTS_BY_CATEGORY,
  FILTER_PRODUCTS_BY_PRICE_INTERVAL,
  FILTER_PRODUCTS_BY_SORTING,
  FILTER_PRODUCTS_BY_USER_INPUT
} from "../actions/type";
import * as Redux from "redux";

import { IFilter } from "./stateTypes";

const initialFilter: IFilter = {
  category: {
    type: "all"
  },
  sortBy: {
    type: "default"
  },
  price: {
    interval: "all"
  },
  search: { searchText: "" }
};
const filter: Redux.Reducer<IFilter, Redux.AnyAction> = (
  filter = initialFilter,
  action = { type: "", payload: "" }
) => {
  switch (action.type) {
    case TOGGLE_FILTER_BUTTON: {
      return {
        ...filter,
        sortBy: {
          type: "default"
        },
        price: {
          interval: "all"
        }
      };
    }
    case TOGGLE_SEARCH_BUTTON: {
      return {
        ...filter,
        sortBy: {
          type: "default"
        },
        price: {
          interval: "all"
        }
      };
    }
    case FILTER_PRODUCTS_BY_CATEGORY: {
      return {
        ...initialFilter,
        category: { type: action.payload, active: true }
      };
    }
    case FILTER_PRODUCTS_BY_SORTING: {
      return {
        ...filter,
        sortBy: {
          type: action.payload
        }
      };
    }
    case FILTER_PRODUCTS_BY_PRICE_INTERVAL: {
      return {
        ...filter,
        price: {
          interval: action.payload
        }
      };
    }
    case FILTER_PRODUCTS_BY_USER_INPUT: {
      return {
        ...filter,
        search: { searchText: action.payload }
      };
    }
    default: {
      return filter;
    }
  }
};

export default filter;
