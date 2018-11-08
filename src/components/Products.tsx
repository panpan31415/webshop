import * as React from "react";
import GridControls from "./GridControls";
import LoadMore from "./LoadMore";
import ProductGrid from "./ProductGrid";
import * as _ from "lodash";
import {
  IProduct,
  IFilter,
  lUIElementsState,
  IUser
} from "../reducers/stateTypes";
const Products: React.SFC<{
  filter: IFilter;
  products: {};
  setfilterByCategory: (event: React.MouseEvent) => void;
  toggleFilterButton: (event: React.MouseEvent) => void;
  toggleSearchButton: (event: React.MouseEvent) => void;
  setfilterBySorting: (event: React.MouseEvent) => void;
  setFilterByPriceInterval: (event: React.MouseEvent) => void;
  setFilterByUserInput: (event: React.FormEvent) => void;
  UIElements: lUIElementsState;
  addProduct: (event: React.MouseEvent) => void;
  user: IUser;
  toggleFav: (productId: string, favorite: boolean) => void;
}> = ({
  products,
  setfilterByCategory,
  setfilterBySorting,
  filter,
  UIElements,
  toggleFilterButton,
  toggleSearchButton,
  setFilterByPriceInterval,
  setFilterByUserInput,
  addProduct,
  user,
  toggleFav
}) => {
  let _filteredProducts = undefined;

  const categoryFilter: (product: IProduct) => boolean = product => {
    if (filter.category.type === "all") {
      return true;
    } else if (product.type === filter.category.type) {
      return true;
    } else {
      return false;
    }
  };

  const searchFilter: (product: IProduct) => boolean = product => {
    if (
      product.name
        .toLowerCase()
        .includes(filter.search.searchText.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  };

  const PriceIntervalFilter: (product: IProduct) => boolean = product => {
    let productPrice = Number(product.price.split(" ")[0]);
    let range = {
      start: Number(filter.price.interval.split(" ")[0]),
      end: Number(filter.price.interval.split(" ")[2])
    };
    if (filter.price.interval === "all") {
      return true;
    } else if (productPrice >= range.start && productPrice <= range.end) {
      return true;
    } else {
      return false;
    }
  };

  const sortMethod = (itemA: IProduct, itemB: IProduct) => {
    let a = Number(itemA.price.split(" ")[0]);
    let b = Number(itemB.price.split(" ")[0]);
    if (filter.sortBy.type === "price_low_to_high") {
      return a - b;
    } else if (filter.sortBy.type === "price_high_to_low") {
      return b - a;
    } else {
      return 0;
    }
  };

  _filteredProducts = _.toArray(products)
    .filter(categoryFilter)
    .filter(searchFilter)
    .filter(PriceIntervalFilter)
    .sort(sortMethod);

  return (
    <div className="products">
      <section>
        <h1 className="products__section-title">Products Overview</h1>
        <GridControls
          searchText={filter.search.searchText}
          setfilterByCategory={setfilterByCategory}
          UIElements={UIElements}
          toggleFilterButton={toggleFilterButton}
          toggleSearchButton={toggleSearchButton}
          setfilterBySorting={setfilterBySorting}
          setFilterByPriceInterval={setFilterByPriceInterval}
          setFilterByUserInput={setFilterByUserInput}
        />
        <ProductGrid
          filteredProducts={_filteredProducts}
          addProduct={addProduct}
          user={user}
          toggleFav={toggleFav}
        />
        <LoadMore />
      </section>
    </div>
  );
};

export default Products;
