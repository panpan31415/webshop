import * as React from "react";
import ProductItem from "./ProductItem";

const ProductGrid: React.SFC = () => {
  return (
    <div className="productGrid">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductGrid;
