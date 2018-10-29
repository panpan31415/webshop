import * as React from "react";
import GridControls from "./GridControls";
import LoadMore from "./LoadMore";
import ProductGrid from "./ProductGrid";
const Products: React.SFC = () => {
  return (
    <div className="products">
      <section>
        <h1 className="products__section-title">Products Overview</h1>
        <GridControls />
        <ProductGrid />
        <LoadMore />
      </section>
    </div>
  );
};

export default Products;
