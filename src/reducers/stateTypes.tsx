export interface IFilter {
  category: {
    type: "all" | "men" | "women" | "bags" | "shoes" | "watch";
  };
  sortBy: {
    type: "default" | "price_low_to_high" | "price_high_to_low";
  };
  price: {
    interval:
      | "all"
      | "0 - 199"
      | "200 - 399"
      | "400 - 599"
      | "600 - 799"
      | "800 - 999"
      | "1000 - Infinity ";
  };
  search: { searchText: string };
}

export interface IProduct {
  productId: string;
  name: string;
  price: string;
  type: string;
  img_url: string;
}

export interface lUIElementsState {
  category: {
    category_all: boolean;
    category_men: boolean;
    category_women: boolean;
    category_bags: boolean;
    category_shoes: boolean;
    category_watch: boolean;
  };
  filter: {
    active: boolean;
    sortBy: {
      default: boolean;
      price_low_to_high: boolean;
      price_high_to_low: boolean;
    };
    price: {
      all: boolean;
      _0_199: boolean;
      _200_399: boolean;
      _400_599: boolean;
      _600_799: boolean;
      _800_999: boolean;
      _1000_Infinity: boolean;
    };
  };
  search: {
    active: boolean;
  };
  shoppingcart: {
    button: boolean;
    sidePanel: boolean;
  };
}
export interface IAuthentication {
  loginStatus: boolean;
  user: {
    password: string;
    userName: string;
    loginTime: string;
    logoutTime: string;
    IP: string;
  };
}

export interface IUser {
  userName: string;
  password: string;
  favorite: Array<string>;
  shopingCart: Array<{ productId: string; quantity: number }>;
  transactions: Array<{ id: string; date: string }>;
}
