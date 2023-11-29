import supabase from "../../config/supabaseClient";
import styles from "./ProductList.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const [fetchError, setFetchError] = useState(null);
  const [prods, setProds] = useState(null);

  // Fetch the data
  useEffect(() => {
    const fetchProds = async () => {
      try {
        const { data } = await supabase.from("phones").select(); // Get all of the data
        setProds(data);
        setFetchError(null);
      } catch (error) {
        setFetchError("Could not fetch products");
        setProds(null);
        console.log(error);
      }
    };

    fetchProds();
  }, []);

  return (
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
  );
};
