import supabase from "../../config/supabaseClient";
import styles from "./ProductList.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "../../components/ProductList/Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { setInitialState } from "../../reducers/productSlice";

export const ProductList = ({ category }) => {
  const [fetchError, setFetchError] = useState(null);
  // const [prods, setProds] = useState(null);
  const prods = useSelector((state) => state.product.products);
  const [filterProds, setFilterProds] = useState(null);
  const dispatch = useDispatch();
  console.log(prods);
  // Fetch the data
  useEffect(() => {
    const fetchProds = async () => {
      try {
        if (category === "refurbished") {
          const { data } = await supabase
            .from("phones")
            .select()
            .is("peer2peer", false);
          // setProds(data);
          dispatch(setInitialState(data));
          console.log(data);
          // setFilterProds(data);
          setFetchError(null);
        } else if (category === "peer2peer") {
          const { data } = await supabase
            .from("phones")
            .select()
            .is("peer2peer", true);
          // setProds(data);
          dispatch(setInitialState(data));
          setFilterProds(data);
          setFetchError(null);
        }
      } catch (error) {
        setFetchError("Could not fetch products");
        // setProds(null);
        console.log(error);
      }
      console.log(prods);
    };

    fetchProds();
  }, []);

  return (
    <>
      <Filter />
      <div className={styles.ProductList}>
        {fetchError && <p>{fetchError}</p>}
        {prods && (
          <div className={styles.FlexContainer}>
            {prods.map((prod) => (
              <div
                key={prod.id}
                className={styles.ProdCard}
                style={{ backgroundImage: `url(${prod.imageUrl})` }}
              >
                <div className={styles.ProdInfo}>
                  <p>{prod.modelValue}</p>
                  <span>{prod.brandValue}</span>
                  <span>{prod.priceValue}kr</span>
                  <button className="BuyBtn">
                    <Link to="/">Buy</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
