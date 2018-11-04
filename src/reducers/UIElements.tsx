import * as Redux from "redux";
import { lUIElementsState } from "./stateTypes";
import {
  TOGGLE_FILTER_BUTTON,
  TOGGLE_SEARCH_BUTTON,
  FILTER_PRODUCTS_BY_SORTING,
  FILTER_PRODUCTS_BY_PRICE_INTERVAL,
  FILTER_PRODUCTS_BY_CATEGORY
} from "../actions/type";

const initialUIElementsState: lUIElementsState = {
  category: {
    category_all: true,
    category_men: false,
    category_women: false,
    category_bags: false,
    category_shoes: false,
    category_watch: false
  },
  filter: {
    active: false,
    sortBy: {
      default: true,
      price_low_to_high: false,
      price_high_to_low: false
    },
    price: {
      all: true,
      _0_199: false,
      _200_399: false,
      _400_599: false,
      _600_799: false,
      _800_999: false,
      _1000_Infinity: false
    }
  },
  search: {
    active: false
  }
};

const UIElements: Redux.Reducer<lUIElementsState, Redux.AnyAction> = (
  UIElementsState = initialUIElementsState,
  action = { type: "", payload: null }
) => {
  switch (action.type) {
    case FILTER_PRODUCTS_BY_CATEGORY: {
      return UpdateCategoryButtons(UIElementsState, action.payload);
    }
    case TOGGLE_FILTER_BUTTON: {
      return {
        ...UIElementsState,
        filter: {
          ...initialUIElementsState.filter,
          active: !UIElementsState.filter.active
        },
        search: { active: false }
      };
    }
    case FILTER_PRODUCTS_BY_SORTING: {
      return UpdateSortingFilter(UIElementsState, action.payload);
    }
    case FILTER_PRODUCTS_BY_PRICE_INTERVAL: {
      return UpdatePriceIntervalFilter(UIElementsState, action.payload);
    }

    case TOGGLE_SEARCH_BUTTON: {
      return {
        ...UIElementsState,
        filter: {
          ...UIElementsState.filter,
          active: false
        },
        search: {
          active: !UIElementsState.search.active
        }
      };
    }

    default: {
      return UIElementsState;
    }
  }
};

export default UIElements;

function UpdatePriceIntervalFilter(
  UIElementsState: lUIElementsState = initialUIElementsState,
  pricrInterval: string
) {
  switch (pricrInterval) {
    case "all": {
      return {
        ...UIElementsState,
        filter: {
          ...UIElementsState.filter,
          price: {
            all: true,
            _0_199: false,
            _200_399: false,
            _400_599: false,
            _600_799: false,
            _800_999: false,
            _1000_Infinity: false
          }
        }
      };
    }
    case "0 - 199": {
      return {
        ...UIElementsState,
        filter: {
          ...UIElementsState.filter,
          price: {
            all: false,
            _0_199: true,
            _200_399: false,
            _400_599: false,
            _600_799: false,
            _800_999: false,
            _1000_Infinity: false
          }
        }
      };
    }
    case "200 - 399": {
      return {
        ...UIElementsState,
        filter: {
          ...UIElementsState.filter,
          price: {
            all: false,
            _0_199: false,
            _200_399: true,
            _400_599: false,
            _600_799: false,
            _800_999: false,
            _1000_Infinity: false
          }
        }
      };
    }
    case "400 - 599": {
      return {
        ...UIElementsState,
        filter: {
          ...UIElementsState.filter,
          price: {
            all: false,
            _0_199: false,
            _200_399: false,
            _400_599: true,
            _600_799: false,
            _800_999: false,
            _1000_Infinity: false
          }
        }
      };
    }
    case "600 - 799": {
      return {
        ...UIElementsState,
        filter: {
          ...UIElementsState.filter,
          price: {
            all: false,
            _0_199: false,
            _200_399: false,
            _400_599: false,
            _600_799: true,
            _800_999: false,
            _1000_Infinity: false
          }
        }
      };
    }
    case "800 - 999": {
      return {
        ...UIElementsState,

        filter: {
          ...UIElementsState.filter,

          price: {
            all: false,
            _0_199: false,
            _200_399: false,
            _400_599: false,
            _600_799: false,
            _800_999: true,
            _1000_Infinity: false
          }
        }
      };
    }
    case "1000 - Infinity": {
      return {
        ...UIElementsState,
        filter: {
          ...UIElementsState.filter,
          price: {
            all: false,
            _0_199: false,
            _200_399: false,
            _400_599: false,
            _600_799: false,
            _800_999: false,
            _1000_Infinity: true
          }
        }
      };
    }
    default: {
      return UIElementsState;
    }
  }
}

function UpdateSortingFilter(
  UIElementsState: lUIElementsState = initialUIElementsState,
  sortType: string
) {
  switch (sortType) {
    case "default": {
      return {
        ...UIElementsState,
        filter: {
          ...UIElementsState.filter,
          sortBy: {
            default: true,
            price_low_to_high: false,
            price_high_to_low: false
          }
        }
      };
    }
    case "price_low_to_high": {
      return {
        ...UIElementsState,
        filter: {
          ...UIElementsState.filter,
          sortBy: {
            default: false,
            price_low_to_high: true,
            price_high_to_low: false
          }
        }
      };
    }
    case "price_high_to_low": {
      return {
        ...UIElementsState,
        filter: {
          ...UIElementsState.filter,
          sortBy: {
            default: false,
            price_low_to_high: false,
            price_high_to_low: true
          }
        }
      };
    }
    default: {
      return UIElementsState;
    }
  }
}

function UpdateCategoryButtons(
  UIElementsState: lUIElementsState = initialUIElementsState,
  categoryType: string
) {
  switch (categoryType) {
    case "all": {
      return initialUIElementsState;
    }
    case "women": {
      return {
        ...initialUIElementsState,
        category: {
          category_all: false,
          category_men: false,
          category_women: true,
          category_bags: false,
          category_shoes: false,
          category_watch: false
        }
      };
    }
    case "men": {
      return {
        ...initialUIElementsState,
        category: {
          category_all: false,
          category_men: true,
          category_women: false,
          category_bags: false,
          category_shoes: false,
          category_watch: false
        }
      };
    }
    case "bags": {
      return {
        ...initialUIElementsState,
        category: {
          category_all: false,
          category_men: false,
          category_women: false,
          category_bags: true,
          category_shoes: false,
          category_watch: false
        }
      };
    }
    case "shoes": {
      return {
        ...initialUIElementsState,
        category: {
          category_all: false,
          category_men: false,
          category_women: false,
          category_bags: false,
          category_shoes: true,
          category_watch: false
        }
      };
    }
    case "watch": {
      return {
        ...initialUIElementsState,
        category: {
          category_all: false,
          category_men: false,
          category_women: false,
          category_bags: false,
          category_shoes: false,
          category_watch: true
        }
      };
    }
    default: {
      return UIElementsState;
    }
  }
}
