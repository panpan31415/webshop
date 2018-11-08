import * as React from "react";
import { ProductItem } from "./ProductItem";
import * as _ from "lodash";
import { IUser } from "src/reducers/stateTypes";

const ProductGrid: React.SFC<{
  filteredProducts: {};
  addProduct: (event: React.MouseEvent) => void;
  toggleFav: (productId: string, favorite: boolean) => void;
  user: IUser;
}> = ({ filteredProducts, addProduct, user, toggleFav }) => {
  return (
    <div className="productGrid">
      {_.keys(filteredProducts).map(id => {
        return (
          <ProductItem
            key={filteredProducts[id]["productId"]}
            Product={filteredProducts[id]}
            addProduct={addProduct}
            favIcon={
              user.favorite.indexOf(filteredProducts[id]["productId"]) > -1
            }
            toggleFav={toggleFav}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
