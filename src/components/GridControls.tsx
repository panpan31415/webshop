import * as React from "react";
import { lUIElementsState } from "./../reducers/stateTypes";

const GridControls: React.SFC<{
  setfilterByCategory: (event: React.MouseEvent) => void;
  UIElements: lUIElementsState;
  toggleFilterButton: (event: React.MouseEvent) => void;
  toggleSearchButton: (event: React.MouseEvent) => void;
  setfilterBySorting: (event: React.MouseEvent) => void;
  setFilterByPriceInterval: (event: React.MouseEvent) => void;
  setFilterByUserInput: (event: React.FormEvent) => void;
  searchText: string;
}> = ({
  setfilterByCategory,
  UIElements,
  toggleFilterButton,
  toggleSearchButton,
  setfilterBySorting,
  setFilterByPriceInterval,
  setFilterByUserInput,
  searchText
}) => {
  const filer_icon = UIElements.filter.active ? (
    <svg>
      <use xlinkHref="images/icons/symbol-defs.svg#icon-close" />
    </svg>
  ) : (
    <svg>
      <use xlinkHref="images/icons/symbol-defs.svg#icon-filter_list" />
    </svg>
  );

  const search_icon = UIElements.search.active ? (
    <svg>
      <use xlinkHref="images/icons/symbol-defs.svg#icon-close" />
    </svg>
  ) : (
    <svg>
      <use xlinkHref="images/icons/symbol-defs.svg#icon-search" />
    </svg>
  );

  return (
    <div className="GridControls_container">
      <div className="GridControls">
        <ul className="GridControls__types">
          <li className="GridControls__type-item">
            <button
              data-category="all"
              onClick={setfilterByCategory}
              className={
                UIElements.category.category_all
                  ? "GridControls__type-item--active"
                  : ""
              }
            >
              All Products
            </button>
          </li>
          <li className="GridControls__type-item">
            <button
              data-category="women"
              onClick={setfilterByCategory}
              className={
                UIElements.category.category_women
                  ? "GridControls__type-item--active"
                  : ""
              }
            >
              Women
            </button>
          </li>
          <li className="GridControls__type-item">
            <button
              data-category="men"
              onClick={setfilterByCategory}
              className={
                UIElements.category.category_men
                  ? "GridControls__type-item--active"
                  : ""
              }
            >
              Men
            </button>
          </li>

          <li className="GridControls__type-item">
            <button
              data-category="bags"
              onClick={setfilterByCategory}
              className={
                UIElements.category.category_bags
                  ? "GridControls__type-item--active"
                  : ""
              }
            >
              Bag
            </button>
          </li>
          <li className="GridControls__type-item">
            <button
              data-category="shoes"
              onClick={setfilterByCategory}
              className={
                UIElements.category.category_shoes
                  ? "GridControls__type-item--active"
                  : ""
              }
            >
              Shoes
            </button>
          </li>
          <li className="GridControls__type-item">
            <button
              data-category="watch"
              onClick={setfilterByCategory}
              className={
                UIElements.category.category_watch
                  ? "GridControls__type-item--active"
                  : ""
              }
            >
              Watches
            </button>
          </li>
        </ul>
        <div className="GridControls__function-group">
          <button
            className={`${
              UIElements.filter.active ? "GridControls-button--active" : ""
            } GridControls-button GridControls-button--filter`}
            onClick={toggleFilterButton}
          >
            <span className="GridControls-button__ico">{filer_icon}</span>
            <span>Filter</span>
          </button>
          <button
            className={` GridControls-button ${
              UIElements.search.active ? "GridControls-button--active" : ""
            }`}
            onClick={toggleSearchButton}
          >
            <span className="GridControls-button__ico">{search_icon}</span>
            <span>Search</span>
          </button>
        </div>
      </div>
      <div className="GridControls__panel">
        <div
          className={`GridControls__panel--filter ${
            UIElements.filter.active
              ? "GridControls__panel--filter--active"
              : ""
          }`}
        >
          <h3>Sort By</h3>
          <ul>
            <li
              data-sort="default"
              className={
                UIElements.filter.sortBy.default ? "fillter__link--active" : ""
              }
              onClick={setfilterBySorting}
            >
              Default
            </li>
            <li
              data-sort="price_low_to_high"
              className={
                UIElements.filter.sortBy.price_low_to_high
                  ? "fillter__link--active"
                  : ""
              }
              onClick={setfilterBySorting}
            >
              Price: Low to High
            </li>
            <li
              data-sort="price_high_to_low"
              className={
                UIElements.filter.sortBy.price_high_to_low
                  ? "fillter__link--active"
                  : ""
              }
              onClick={setfilterBySorting}
            >
              Price: High to Low
            </li>
          </ul>
          <h3>Price</h3>
          <ul>
            <li
              data-price-interval="all"
              className={
                UIElements.filter.price.all ? "fillter__link--active" : ""
              }
              onClick={setFilterByPriceInterval}
            >
              All Prices
            </li>
            <li
              data-price-interval="0 - 199"
              className={
                UIElements.filter.price._0_199 ? "fillter__link--active" : ""
              }
              onClick={setFilterByPriceInterval}
            >
              0 - 199 kr.
            </li>
            <li
              data-price-interval="200 - 399"
              className={
                UIElements.filter.price._200_399 ? "fillter__link--active" : ""
              }
              onClick={setFilterByPriceInterval}
            >
              200 - 399 kr.
            </li>
            <li
              data-price-interval="400 - 599"
              className={
                UIElements.filter.price._400_599 ? "fillter__link--active" : ""
              }
              onClick={setFilterByPriceInterval}
            >
              400 - 599 kr.
            </li>
            <li
              data-price-interval="600 - 799"
              className={
                UIElements.filter.price._600_799 ? "fillter__link--active" : ""
              }
              onClick={setFilterByPriceInterval}
            >
              600 - 799 kr.
            </li>

            <li
              data-price-interval="800 - 999"
              className={
                UIElements.filter.price._800_999 ? "fillter__link--active" : ""
              }
              onClick={setFilterByPriceInterval}
            >
              800 - 999 kr.
            </li>
            <li
              data-price-interval="1000 - Infinity"
              className={
                UIElements.filter.price._1000_Infinity
                  ? "fillter__link--active"
                  : ""
              }
              onClick={setFilterByPriceInterval}
            >
              More than 1000 kr.
            </li>
          </ul>
          <h3 title="function doesn't work">Color</h3>
          <ul>
            <li>
              <span style={{ color: "black" }}>{""}</span>
              Black
            </li>
            <li>
              <span style={{ color: "Gray" }}>{""}</span>
              Gray
            </li>
            <li>
              <span style={{ color: "Red" }}>{""}</span>
              Red
            </li>
            <li>
              <span style={{ color: "Green" }}>{""}</span>
              Green
            </li>
            <li>
              <span style={{ color: "orangered" }}>{""}</span>
              orangered
            </li>
          </ul>
          <h3>More Options</h3>
        </div>
        <div
          className={`GridControls__panel--search ${
            UIElements.search.active
              ? "GridControls__panel--search--active"
              : ""
          }`}
        >
          <div className="GridControls__panel--search-icon">
            <svg>
              <use xlinkHref={"images/icons/symbol-defs.svg#icon-search"} />
            </svg>
          </div>
          <input
            type="text"
            value={searchText}
            placeholder="Type product name to search..."
            onChange={setFilterByUserInput}
          />{" "}
        </div>
      </div>
    </div>
  );
};
export default GridControls;
