import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.scss";
import {
  clearFilters,
  setFilter,
  calculatePriceRange,
  sortProducts,
} from "../../../reducers/productSlice";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const filterArray = useSelector((state) => state.product.filterArray);
  const [isFilterActive, setFilterActive] = useState(false);
  const [isSortByActive, setSortByActive] = useState(false);
  const [sort, setSort] = useState(null);
  const priceRange = useSelector((state) => state.product.filter.priceRange);

  const handleFilterToggle = () => {
    setFilterActive((last) => !last);
    dispatch(calculatePriceRange());
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

  const handleSort = (e) => {
    const sorting = e.target.value;
    setSort(sorting);
    dispatch(sortProducts(sorting));
    // dispatch(setFilter());
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
          {isSortByActive ? "CLOSE" : "SORT BY"}
        </button>
        {isSortByActive && (
          <div className={styles.SortBox}>
            <form>
              <label>
                <input
                  type="radio"
                  value="high-low"
                  onChange={handleSort}
                  checked={sort === "high-low"}
                />
                Price: High to low
              </label>
              <label>
                <input
                  type="radio"
                  value="low-high"
                  onChange={handleSort}
                  checked={sort === "low-high"}
                />
                Price: Low to high
              </label>
              <label>
                <input
                  type="radio"
                  value="newest"
                  onChange={handleSort}
                  checked={sort === "newest"}
                />
                Newest
              </label>
            </form>
          </div>
        )}
        {isSortByActive && (
          <div className={styles.SortBox}>
            <form>
              <label>
                <input
                  type="radio"
                  value="high-low"
                  onChange={handleSort}
                  checked={sort === "high-low"}
                />
                Price: High to low
              </label>
              <label>
                <input
                  type="radio"
                  value="low-high"
                  onChange={handleSort}
                  checked={sort === "low-high"}
                />
                Price: Low to high
              </label>
              <label>
                <input
                  type="radio"
                  value="newest"
                  onChange={handleSort}
                  checked={sort === "newest"}
                />
                Newest
              </label>
            </form>
          </div>
        )}
      </div>
    </aside>
  );
};

// switch (sorting) {
//   case "high-low":
//     state.filterArray.sort((a, b) => b.priceValue - a.priceValue);
//     break;
//   case "low-high":
//     state.filterArray.sort((a, b) => a.priceValue - b.priceValue);
//     break;
//   case "newest":
//     state.filterArray.sort(
//       (a, b) => new Date(b.created_at) - new Date(a.created_at)
//     );
//     break;
// }
