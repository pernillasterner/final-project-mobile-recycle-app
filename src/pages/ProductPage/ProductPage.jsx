import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconGoBack } from "../../assets/Icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";
import buttonStyles from "../../components/commons/Buttons.module.scss";
import React from "react";

import supabase from "../../config/supabaseClient";
import styles from "./ProductPage.module.scss";

export const ProductPage = () => {
  const { category, prodId } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [prod, setProd] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch the data with specific prodId
  useEffect(() => {
    const fetchProds = async () => {
      try {
        const { data } = await supabase
          .from("phones")
          .select()
          .eq("id", prodId);
        setProd(data[0]);
        setFetchError(null);
      } catch (error) {
        setFetchError("Could not fetch products");
        setProd(null);
      }
    };

    fetchProds();
  }, [prodId]);

  const handleAddToCart = (prod) => {
    if (prod) {
      dispatch(addToCart(prod));

      // Get current cart from local storage
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if item exists in cart
      const existingItem = storedCart.find((item) => item.id === prod.id);

      if (existingItem) {
        // Increase the quantity if already exists
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        storedCart.push({ ...prod, quantity: 1 });
      }

      // Update the local storage with the new cart
      localStorage.setItem("cart", JSON.stringify(storedCart));

      // Update the local storage with the current totalItems from Redux store
      const newTotalItems = storedCart.reduce(
        (cartItems, item) => cartItems + (item.quantity || 1),
        0
      );
      localStorage.setItem("totalItems", JSON.stringify(newTotalItems));
    }
  };

  return (
    // TODO: Add class and set color depengin on that
    <>
      {prod && (
        <article className={styles.ProdContainer}>
          <div className={buttonStyles.GoBackBtn} onClick={() => navigate(-1)}>
            <IconGoBack />
          </div>
          <div className={`${styles.Prod__LeftColumn} ${styles[category]}`}>
            <div
              className={styles.ProdCardImg}
              style={{ backgroundImage: `url(${prod.imageUrl})` }}
            ></div>
          </div>
          <div className={styles.Prod__RightColumn}>
            <div className={styles.HeaderContainer}>
              <h1 className={styles.ModelValue}>{prod.modelValue}</h1>
              <div className={styles.ModelInfo}>
                <div className={styles.Info}>
                  <p>{prod.brandValue}</p>
                  <p>{prod.storage}</p>
                  <p>{prod.visualCondition}</p>
                </div>

                <h2 className={styles.PriceValue}>
                  <strong>{prod.priceValue} kr</strong>
                </h2>
              </div>
            </div>

            <div className="ProdDetails">
              {/* TODO: Add release year */}
              {/* <p>Release year: 2023</p> */}
            </div>

            <div className={styles.CommentContainer}>
              <h3>Comment from user:</h3>
              <div className={styles.CommentArea}>
                <p>{prod.comment}</p>
              </div>
            </div>

            <div className={styles.ProductTableContainer}>
              <table>
                <thead>
                  <tr>
                    <th>Questions</th>
                    <th>Answers</th>
                  </tr>
                </thead>
                <tbody>
                  {prod &&
                    prod.phoneDescription.map((desc, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td>Does the phone function normally?</td>
                          <td>{desc.functionCondition ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                          <td>Is the screen intact and undamaged?</td>
                          <td>{desc.screenCondition ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                          <td>
                            Are any of the mobile's glass parts broken (back
                            glass or camera lens)?
                          </td>
                          <td>{desc.glassCondition ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                          <td>
                            Is your phone bent, water damaged, or is the
                            fingerprint reader broken?
                          </td>
                          <td>{desc.phoneDamage ? "Yes" : "No"}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                </tbody>
              </table>
            </div>
            <button
              className={`${styles.AddToCartBtn} ${styles[category]}`}
              onClick={() => handleAddToCart(prod)}
            >
              Add to cart
            </button>
          </div>
        </article>
      )}
    </>
  );
};
