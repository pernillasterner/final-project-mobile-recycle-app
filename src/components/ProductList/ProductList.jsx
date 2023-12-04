import supabase from "../../config/supabaseClient";
import styles from "./ProductList.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "../../components/ProductList/Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { setInitialState } from "../../reducers/productSlice";

export const ProductList = ({ category }) => {
  const [fetchError, setFetchError] = useState(null);
  const filterArray = useSelector((state) => state.product.filterArray);
  const prods = useSelector((state) => {
    return state.product.filterArray.length > 0
      ? state.product.filterArray
      : state.product.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProds = async () => {
      try {
        if (category === "refurbished") {
          const { data } = await supabase
            .from("phones")
            .select()
            .is("peer2peer", false);
          dispatch(setInitialState(data));
          setFetchError(null);
        } else if (category === "peer2peer") {
          const { data } = await supabase
            .from("phones")
            .select()
            .is("peer2peer", true);
          dispatch(setInitialState(data));
          setFetchError(null);
        }
      } catch (error) {
        setFetchError("Could not fetch products");
        console.log(error);
      }
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
