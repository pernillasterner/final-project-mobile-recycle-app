import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconGoBack } from "../../assets/Icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";

import supabase from "../../config/supabaseClient";
import styles from "./ProductPage.module.scss";

/**
 * Use params to fetch the prodId
 * Fetch that product using supabase select
 * Update the product page with the new product
 * http://localhost:5174/product/8
 * 
 * 

 */

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
            <h1 className={styles.ProdModel}>{prod.modelValue}</h1>
            <p>{prod.created_at}</p>
            <div className="BrandInfo">
              <h5>{prod.brandValue}</h5>
              <p>{prod.priceValue} kr</p>
            </div>
            <div className="ProdDetails">
              <p>Release year: 2023</p>
            </div>
            <div className="ProdDescription">
              {prod &&
                prod.phoneDescription.map((desc, index) => (
                  <div key={index} className="DescriptionList">
                    <p>{desc.comment}</p>
                    <p>{desc.functionNormal ? "Ja" : "Nej"}</p>
                    <p>{desc.glassNormal ? "Ja" : "Nej"}</p>
                    <p>{desc.phoneCondition ? "Ja" : "Nej"}</p>
                    <p>{desc.phoneDamage ? "Ja" : "Nej"}</p>
                    <p>{desc.screenNormal ? "Ja" : "Nej"}</p>
                    <p>{desc.storage}</p>
                  </div>
                ))}
            </div>
            <button
              className="AddToCartBtn"
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
