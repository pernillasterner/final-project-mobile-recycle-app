import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Filter.module.scss";

export const Filter = () => {
  const dispatch = useDispatch();
  const [isFilterActive, setFilterActive] = useState(false);
  const [isSortByActive, setSortByActive] = useState(false);
  const brandValue = "iPhone";

  const handleFilterToggle = () => {
    console.log("Open filter");
    setFilterActive(!isFilterActive);
    // Add dropdown to sort by filter
  };

  const handleSortByFilter = () => {
    // Add dropdown to sort by filter
    console.log("Open sort by");
    setSortByActive(!isSortByActive);
  };

  const handleClearFilter = () => {
    // Use dispatch to clear the active filter
    // dispatch.clearFilter();
  };

  const handleDropdownItem = (value) => {
    // Find all items with brandValue = item
    console.log(value);
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
                className="FilterDropdownBtn"
                onClick={handleDropdownItem(brandValue)}
              >
                iPhone
              </button>
              <button
                className="FilterDropdownBtn"
                onClick={handleDropdownItem(brandValue)}
              >
                Samsung
              </button>
            </div>

            <div className={styles.RangeBox}>
              <h4>Price Range</h4>
              <span className={styles.LowRange}></span>
              <span className={styles.HighRange}></span>
            </div>
            <div className={styles.ClearFilterBox}>
              <button className="FilterDropdownBtn" onClick={handleClearFilter}>
                Clear filter
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="SortBox">
        <button className="FilterBtn" onClick={handleSortByFilter}>
          SORT BY
        </button>
        {/* {isSortByActive && (
            // TODO: Add dropdown
        )} */}
      </div>
    </aside>
  );
};
