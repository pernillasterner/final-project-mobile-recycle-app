import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.scss";
import {
  clearFilters,
  setFilter,
  calculatePriceRange,
} from "../../../reducers/productSlice";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const filterArray = useSelector((state) => state.product.filterArray);

  const [isFilterActive, setFilterActive] = useState(false);
  const [isSortByActive, setSortByActive] = useState(false);
  const priceRange = useSelector((state) => state.product.filter.priceRange);
  const handleFilterToggle = () => {
    setFilterActive((last) => !last);
    dispatch(calculatePriceRange());
  };

  const handleSortByFilter = () => {
    // Add dropdown to sort by filter
    console.log("Open sort by");
    setSortByActive(!isSortByActive);
  };

  const handleClearFilter = () => {
    document.querySelectorAll(".FilterDropdownBtn").forEach((button) => {
      button.classList.remove("FilterBrandBtnActive");
    });
    dispatch(clearFilters());
  };

  const handleFilterBrand = (value) => {
    document
      .querySelector(`.${value}`)
      .classList.toggle("FilterBrandBtnActive");
    dispatch(setFilter(value));
  };

  return (
    <aside className={styles.FilterAside}>
      <div className="FilterBox">
        <button className="FilterBtn" onClick={handleFilterToggle}>
          {isFilterActive ? "CLOSE" : "FILTER"}
        </button>
        {isFilterActive && (
          <div className={styles.FilterDropdown}>
            <div className={styles.BrandBox}>
              <h4>Brand</h4>
              <button
                className="FilterDropdownBtn Apple"
                onClick={() => handleFilterBrand("Apple")}
              >
                iPhone
              </button>
              <button
                className="FilterDropdownBtn Samsung"
                onClick={() => handleFilterBrand("Samsung")}
              >
                Samsung
              </button>
            </div>

            <div className={styles.RangeBox}>
              <h4>Price Range</h4>
              <div>
                <span>{priceRange.priceLow}</span>

                <span>{priceRange.priceHigh}</span>
                <Slider range />
              </div>

              {/* <span className={styles.LowRange}></span>
              <span className={styles.HighRange}></span> */}
            </div>
            <div className={styles.ClearFilterBox}>
              <button
                className="FilterDropdownBtn"
                onClick={() => handleClearFilter()}
              >
                Clear filter
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.SortDropdown}>
        <button className="FilterBtn" onClick={handleSortByFilter}>
          SORT BY
        </button>
        {isSortByActive && (
          <div className={styles.SortBox}>
            <p>Price: High to low</p>
            <p>Price: Low to high</p>
            <p>Newest</p>
          </div>
        )}
      </div>
    </aside>
  );
};
