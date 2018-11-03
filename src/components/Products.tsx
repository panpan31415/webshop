import * as React from "react";
import GridControls from "./GridControls";
import LoadMore from "./LoadMore";
import ProductGrid from "./ProductGrid";
import * as _ from "lodash";
import { IProduct } from "./ProductItem";
const Products: React.SFC<{
  category: string;
  products: {};
  changeCategory: (event: React.MouseEvent) => void;
}> = ({ products, changeCategory, category }) => {
  const match: (product: IProduct) => boolean = product => {
    if (category === "all" || category === "") {
      return true;
    } else if (product.type === category) {
      return true;
    } else {
      return false;
    }
  };

  const _filteredProducts = _.toArray(products).filter(match);
  return (
    <div className="products">
      <section>
        <h1 className="products__section-title">Products Overview</h1>
        <GridControls changeCategory={changeCategory} />
        <ProductGrid filteredProducts={_filteredProducts} />
        <LoadMore />
      </section>
    </div>
  );
};

export default Products;
