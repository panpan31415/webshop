import * as React from "react";

const GridControls = () => {
  return (
    <div className="GridControls">
      <ul className="GridControls__types">
        <li className="GridControls__type-item">
          <button>All Products</button>
        </li>
        <li className="GridControls__type-item">
          <button>Women</button>
        </li>
        <li className="GridControls__type-item">
          <button>Men</button>
        </li>

        <li className="GridControls__type-item">
          <button>Bag</button>
        </li>
        <li className="GridControls__type-item">
          <button>Shoes</button>
        </li>
        <li className="GridControls__type-item">
          <button>Watches</button>
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
  );
};
export default GridControls;
