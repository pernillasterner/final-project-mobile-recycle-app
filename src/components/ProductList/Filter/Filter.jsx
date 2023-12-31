import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.scss";
import {
  clearFilters,
  setFilter,
  calculatePriceRange,
  sortProducts,
  setPriceRange,
} from "../../../reducers/productSlice";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const [isFilterActive, setFilterActive] = useState(false);
  const [isSortByActive, setSortByActive] = useState(false);
  const [sort, setSort] = useState(null);
  const priceRange = useSelector((state) => state.product.filter.priceRange);
  const brandValue = useSelector((state) => state.product.filter.brandValue);
  const [sliderValue, setSliderValue] = useState(null);

  const handleFilterToggle = () => {
    setFilterActive((last) => !last);
    dispatch(calculatePriceRange());
  };

  const handleSortByFilter = () => {
    setSortByActive(!isSortByActive);
  };

  const handleClearFilter = () => {
    dispatch(clearFilters());
    setFilterActive(false);
  };

  const handleFilterBrand = (value) => {
    handleActiveFilter(value);
    dispatch(setFilter(value));
    dispatch(calculatePriceRange());
  };

  const handleSort = (e) => {
    const sorting = e.target.value;
    setSort(sorting);
    dispatch(sortProducts(sorting));
  };

  const submitSlider = (e) => {
    setSliderValue((value) => e);
    dispatch(setPriceRange(e));
  };

  const handleActiveFilter = (phonebrand) => {
    const brandString = phonebrand.toString();
    if (brandValue?.includes(brandString)) {
      document
        .querySelector(`.${brandString}`)
        .classList.add("FilterBrandBtnActive");
    } else {
      document
        .querySelector(`.${brandString}`)
        .classList.remove("FilterBrandBtnActive");
    }
  };

  useEffect(() => {
    setSliderValue([priceRange.priceLow, priceRange.priceHigh]);
    if (isFilterActive) {
      handleActiveFilter("Samsung");
      handleActiveFilter("Apple");
    }
  }, [isFilterActive, brandValue, priceRange]);

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
                <div className={styles.SliderInfo}>
                  {/* <span>Low:{sliderValue[0] || sliderValue.priceLow} kr</span>
                  <span>High:{sliderValue[1] || sliderValue.priceHigh} kr</span> */}
                  <span>Low:{sliderValue[0]} kr</span>
                  <span>High:{sliderValue[1]} kr</span>
                </div>
                <Slider
                  allowCross={false}
                  range
                  defaultValue={[priceRange.priceLow, priceRange.priceHigh]}
                  step={100}
                  min={priceRange.priceLow}
                  max={priceRange.priceHigh}
                  onChange={(e) => submitSlider(e)}
                />
              </div>
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
