import * as React from "react";
import { ProductItem } from "./ProductItem";
import * as _ from "lodash";

const ProductGrid: React.SFC<{ filteredProducts: {} }> = ({
  filteredProducts
}) => {
  return (
    <div className="productGrid">
      {_.keys(filteredProducts).map(id => {
        return <ProductItem key={id} Product={filteredProducts[id]} />;
      })}
    </div>
  );
};

export default ProductGrid;
