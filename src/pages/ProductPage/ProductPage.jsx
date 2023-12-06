import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconGoBack } from "../../assets/Icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";
import React from "react";

import supabase from "../../config/supabaseClient";
import styles from "./ProductPage.module.scss";

export const ProductPage = () => {
  const { prodId } = useParams();
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
        console.log(error);
      }
    };

    fetchProds();
  }, [prodId]);

  const handleAddToCart = (prod) => {
    if (prod) {
      dispatch(addToCart(prod));
    }
  };

  return (
    // TODO: Add class and set color depengin on that
    <>
      <div className="GoBackBtn" onClick={() => navigate(-1)}>
        <IconGoBack />
      </div>
      {prod && (
        <article className={styles.ProdContainer}>
          <div className={styles.Prod__LeftColumn}>
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

                <p className={styles.PriceValue}>
                  <strong>{prod.priceValue} kr</strong>
                </p>
              </div>
            </div>

            <div className="ProdDetails">
              <p>Release year: 2023</p>
            </div>

            <div className={styles.CommentContainer}>
              <h4>Comment from user:</h4>
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
              className="AddToCartBtn"
              onClick={() => handleAddToCart(prod)}
            >
              ADD TO CART
            </button>
          </div>
        </article>
      )}
    </>
  );
};
