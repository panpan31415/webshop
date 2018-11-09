import * as React from "react";
import { IProduct } from "../reducers/stateTypes";
interface IShoppingCartItem {
  quantity: number;
  product: IProduct;
}
const ShoppingCartItem: React.SFC<{
  shoppingCartItem: IShoppingCartItem;
  minusProduct: (event: React.MouseEvent) => void;
}> = ({ shoppingCartItem, minusProduct }) => {
  return (
    <div className="side-panel__item">
      <div className="side-panel__item__img">
        <img
          src={require("../" + shoppingCartItem.product.img_url)}
          alt="productImg"
        />

        <div
          className="side-panel__item__img-cover"
          data-product-id={shoppingCartItem.product.productId}
          onClick={minusProduct}
        >
          <div className="side-panel__item__img-close-btn">
            <svg>
              <use xlinkHref="images/icons/symbol-defs.svg#icon-close" />
            </svg>
          </div>
        </div>
      </div>
      <p className="side-panel__item__title">{shoppingCartItem.product.name}</p>
      <p className="side-panel__item__price">
        <span>{shoppingCartItem.quantity}</span> x{" "}
        <span>{shoppingCartItem.product.price}</span>
      </p>
    </div>
  );
};

export default ShoppingCartItem;
