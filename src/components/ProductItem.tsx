import * as React from "react";

const ProductItem: React.SFC = () => {
  return (
    <div className="productGrid__item">
      <div className="productGrid__item__img-container">
        <img src="images/product-05.jpg" alt="IMG-PRODUCT" />
        <div className="productGrid__item__button-container">
          <button className="round-corner-button productGrid__item__button">
            Quick View
          </button>
        </div>
      </div>
      <div className="productGrid__item__name">
        <p>Esprit Ruffle Shirt</p>
        <div className="productGrid__item__fav">
          <svg>
            <use xlinkHref="images/icons/symbol-defs.svg#icon-heart-o" />
          </svg>
        </div>
      </div>
      <p className="productGrid__item__price">450.00 DKK</p>
    </div>
  );
};

export default ProductItem;
