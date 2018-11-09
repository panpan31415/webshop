import * as React from "react";

import { IProduct } from "../reducers/stateTypes";

export const ProductItem: React.SFC<{
  key: string;
  Product: IProduct;
  addProduct: (event: React.MouseEvent) => void;
  favIcon: boolean;
  toggleFav: (productId: string, favorite: boolean) => void;
}> = ({ Product, addProduct, favIcon, toggleFav }) => {
  const { name, price, img_url, productId } = Product;
  const initFavIcon = () => {
    return favIcon ? (
      <svg key={productId + "icon-heart"}>
        <use
          xlinkHref={require("../images/icons/symbol-defs.svg") + "#icon-heart"}
        />
      </svg>
    ) : (
      <svg key={productId + "icon-heart-o"}>
        <use
          xlinkHref={
            require("../images/icons/symbol-defs.svg") + "#icon-heart-o"
          }
        />
      </svg>
    );
  };

  return (
    <div className="productGrid__item">
      <div className="productGrid__item__img-container">
        <img src={require(`../${img_url}`)} alt="IMG-PRODUCT" />
        <div className="productGrid__item__button-container">
          <button
            className="round-corner-button productGrid__item__button"
            data-product-id={productId}
            onClick={addProduct}
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="productGrid__item__name">
        <p>{name}</p>
        <div
          className="productGrid__item__fav"
          onClick={e => toggleFav(productId, !favIcon)}
        >
          {initFavIcon()}
        </div>
      </div>
      <p className="productGrid__item__price">{price}</p>
    </div>
  );
};
