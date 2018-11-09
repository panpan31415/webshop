import * as React from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { IUser, IProduct } from "../reducers/stateTypes";

interface IShoppingCartItem {
  quantity: number;
  product: IProduct;
}

const ShopingcartSidePanel: React.SFC<{
  visible: boolean;
  close: () => void;
  user: IUser;
  products: {};
  minusProduct: (event: React.MouseEvent) => void;
}> = ({ visible, close, user, products, minusProduct }) => {
  let shoppingCartItems: Array<IShoppingCartItem>;

  shoppingCartItems = user.shopingCart.map(sItem => {
    return { quantity: sItem.quantity, product: products[sItem.productId] };
  });

  const totalPrice = shoppingCartItems.reduce((accu, sci) => {
    return accu + Number(sci.product.price.split(" ")[0]) * sci.quantity;
  }, 0);

  return (
    <div className={`side-panel ${visible ? "side-panel--visivle" : ""}`}>
      <div className="side-panel__header">
        <h3>Your Cart</h3>
        <div className="side-panel__close" onClick={close}>
          <svg>
            <use
              xlinkHref={`${require("../images/icons/symbol-defs.svg") +
                "#icon-close"}`}
            />
          </svg>
        </div>
      </div>

      <div className="side-panel__item-container">
        {shoppingCartItems.map(item => (
          <ShoppingCartItem
            shoppingCartItem={item}
            key={item.product.productId}
            minusProduct={minusProduct}
          />
        ))}
      </div>
      <div className="side-panel__controls">
        <p className="price_total">Total {totalPrice} kr.</p>
        <a href="#" className="round-corner-button">
          view chart
        </a>
        <a href="#" className="round-corner-button">
          checkout
        </a>
      </div>
    </div>
  );
};

export default ShopingcartSidePanel;
