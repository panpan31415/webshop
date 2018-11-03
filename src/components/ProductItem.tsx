import * as React from "react";

export interface IProduct {
  productId: string;
  name: string;
  price: string;
  type: string;
  img_url: string;
}

export const ProductItem: React.SFC<{
  key: string;
  Product: IProduct | any;
}> = ({ Product }) => {
  const { name, price, img_url } = Product;
  return (
    <div className="productGrid__item">
      <div className="productGrid__item__img-container">
        <img src={img_url} alt="IMG-PRODUCT" />
        <div className="productGrid__item__button-container">
          <button className="round-corner-button productGrid__item__button">
            Quick View
          </button>
        </div>
      </div>
      <div className="productGrid__item__name">
        <p>{name}</p>
        <div className="productGrid__item__fav">
          <svg>
            <use xlinkHref="images/icons/symbol-defs.svg#icon-heart-o" />
          </svg>
        </div>
      </div>
      <p className="productGrid__item__price">{price}</p>
    </div>
  );
};
