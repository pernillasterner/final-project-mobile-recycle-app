import supabase from "../../config/supabaseClient";
import styles from "./ProductList.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "../../components/ProductList/Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { setInitialState } from "../../reducers/productSlice";
import buttons from "../../components/commons/Buttons.module.scss";

export const ProductList = ({ category }) => {
  const [fetchError, setFetchError] = useState(null);
  const filterArray = useSelector((state) => state.product.filterArray);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProds = async () => {
      try {
        if (category === "refurbished") {
          const { data } = await supabase
            .from("phones")
            .select()
            .limit(15)
            .is("peer2peer", false);
          dispatch(setInitialState(data));
          setFetchError(null);
        } else if (category === "peertopeer") {
          const { data } = await supabase
            .from("phones")
            .select()
            .limit(15)
            .is("peer2peer", true)
            .order("id", { ascending: false });
          dispatch(setInitialState(data));
          setFetchError(null);
        }
      } catch (error) {
        setFetchError("Could not fetch products");
        console.log(error);
      }
    };

    fetchProds();
  });

  return (
    <>
      <Filter />
      <div className={styles.ProductList} id="all-products">
        {fetchError && <p>{fetchError}</p>}
        {filterArray && (
          <div className={styles.FlexContainer}>
            {filterArray.map((prod) => (
              <div
                key={prod.id}
                className={styles.ProdCard}
                style={{
                  backgroundImage: `url(${
                    prod.brandValue.toLowerCase() === "apple"
                      ? "./iphone_placholder.svg"
                      : "./samsung_placeholder.svg"
                  })`,
                }}
              >
                <div className={styles.ProdInfo}>
                  <p>{prod.modelValue}</p>
                  <span>{prod.brandValue}</span>

                  <span>{prod.priceValue}kr</span>

                  <button className={buttons.BuyBtn}>
                    <Link to={`/${category}/product/${prod.id}`}>Buy</Link>
                  </button>
                  {category === "refurbished" && (
                    <span className={styles.RefurbishedTag}>Refurbished</span>
                  )}
                  {category === "peertopeer" && (
                    <span className={styles.Peer2PeerTag}>Peer2Peer</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
