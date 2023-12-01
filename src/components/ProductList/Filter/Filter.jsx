import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.scss";
import { clearFilters, setFilter } from "../../../reducers/productSlice";

export const Filter = () => {
  const filterArray = useSelector((state) => state.product.filterArray);
  const dispatch = useDispatch();
  const [isFilterActive, setFilterActive] = useState(false);
  const [isSortByActive, setSortByActive] = useState(false);

  const handleFilterToggle = () => {
    setFilterActive((last) => !last);
    // Add dropdown to sort by filter
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
              <input type="range" />
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
