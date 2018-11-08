import {
  AUTHENICATION_REQUEST_SUCCESS,
  LOGOUT,
  ADD_PRODUCT,
  MIUNS_PRODUCT,
  TOGGLE_FAV
} from "../actions/type";
import { IUser } from "./stateTypes";
import * as Redux from "redux";

const initialUser: IUser = {
  userName: "",
  password: "",
  favorite: [],
  shopingCart: [],
  transactions: []
};

const user: Redux.Reducer<IUser, Redux.AnyAction> = (
  user = initialUser,
  action = { type: "" }
) => {
  switch (action.type) {
    case AUTHENICATION_REQUEST_SUCCESS: {
      const _user = action.payload["0001"];
      return {
        userName: _user.userName,
        password: _user.password,
        favorite: _user.favorite,
        shopingCart: _user.shopingCart,
        transactions: _user.transactions
      };
    }
    case ADD_PRODUCT: {
      const _productId = action.payload;

      let index = user.shopingCart.findIndex(
        item => item.productId === _productId
      );
      if (index === -1) {
        return {
          ...user,
          shopingCart: [
            ...user.shopingCart,
            {
              productId: _productId,
              quantity: 1
            }
          ]
        };
      } else {
        let new_sc = user.shopingCart.map(item => {
          if (item.productId === _productId) {
            return { productId: _productId, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });

        return {
          ...user,
          shopingCart: new_sc
        };
      }
    }
    case MIUNS_PRODUCT: {
      let _productId = action.payload;
      let new_sc = user.shopingCart.map(item => {
        if (item.productId === _productId) {
          return { productId: _productId, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return {
        ...user,
        shopingCart: new_sc.filter(item => {
          return item.quantity > 0;
        })
      };
    }
    case TOGGLE_FAV: {
      if (action.payload.favorite) {
        let _favorite = [...user.favorite, action.payload.productId];
        return {
          ...user,
          favorite: _favorite
        };
      } else {
        let _favorite = user.favorite.filter(
          item => item !== action.payload.productId
        );
        return {
          ...user,
          favorite: _favorite
        };
      }
    }

    case LOGOUT: {
      return initialUser;
    }

    default: {
      return user;
    }
  }
};
export default user;
