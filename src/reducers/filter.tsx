import { FILTER_PRODUCTS_BY_CATEGORY } from "../actions/type";
import * as Redux from "redux";

interface IFilter {
  category: {
    type: "all" | "men" | "women" | "bags" | "shoes" | "watch";
    active: boolean;
  };
  sortBy: {
    type: "default" | "price_low_to_high" | "price_high_to_low";
    active: boolean;
  };
  search: { searchText: string; active: boolean };
}
const initialFilter: IFilter = {
  category: {
    type: "all",
    active: true
  },
  sortBy: {
    type: "default",
    active: false
  },
  search: { searchText: "", active: false }
};
const filter: Redux.Reducer<IFilter | any, Redux.AnyAction> = (
  filter = initialFilter,
  action = { type: "" }
) => {
  switch (action.type) {
    case FILTER_PRODUCTS_BY_CATEGORY: {
      return {
        category: { type: action.payload, active: true },
        sortBy: { type: "default", active: false },
        search: { searchText: "", active: false }
      };
    }
    default: {
      return filter;
    }
  }
};

export default filter;
