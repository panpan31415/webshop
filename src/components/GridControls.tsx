import * as React from "react";

const GridControls: React.SFC<{
  changeCategory: (event: React.MouseEvent) => void;
}> = ({ changeCategory }) => {
  return (
    <div className="GridControls_container">
      <div className="GridControls">
        <ul className="GridControls__types">
          <li className="GridControls__type-item">
            <button data-category="all" onClick={changeCategory}>
              All Products
            </button>
          </li>
          <li className="GridControls__type-item">
            <button data-category="women" onClick={changeCategory}>
              Women
            </button>
          </li>
          <li className="GridControls__type-item">
            <button data-category="men" onClick={changeCategory}>
              Men
            </button>
          </li>

          <li className="GridControls__type-item">
            <button data-category="bags" onClick={changeCategory}>
              Bag
            </button>
          </li>
          <li className="GridControls__type-item">
            <button data-category="shoes" onClick={changeCategory}>
              Shoes
            </button>
          </li>
          <li className="GridControls__type-item">
            <button data-category="watch" onClick={changeCategory}>
              Watches
            </button>
          </li>
        </ul>
        <div className="GridControls__function-group">
          <button className="GridControls-button GridControls-button--filter">
            <span className="GridControls-button__ico">
              <svg>
                <use xlinkHref="images/icons/symbol-defs.svg#icon-filter_list" />
              </svg>
            </span>
            <span>Filter</span>
          </button>
          <button className="GridControls-button">
            <span className="GridControls-button__ico">
              <svg>
                <use xlinkHref="images/icons/symbol-defs.svg#icon-search" />
              </svg>
            </span>
            <span>Search</span>
          </button>
        </div>
      </div>
      <div className="GridControls__panel">
        <div className="GridControls__panel--filter">
          <h3>Sort By</h3>
          <ul>
            <li>Default</li>
            <li>Price: Low to High</li>
            <li>Price: Low to High</li>
          </ul>
          <h3>Price</h3>
          <ul>
            <li>0 - 199 kr.</li>
            <li>200 - 399 kr.</li>
            <li>400 - 599 kr.</li>
            <li>600 - 899 kr.</li>
            <li>more than 900 kr.</li>
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
        <div className="GridControls__panel--search">
          <div className="GridControls__panel--search-icon">
            <svg>
              <use xlinkHref={"images/icons/symbol-defs.svg#icon-search"} />
            </svg>
          </div>
          <input type="text" placeholder="Type product name to search..." />{" "}
        </div>
      </div>
    </div>
  );
};
export default GridControls;
