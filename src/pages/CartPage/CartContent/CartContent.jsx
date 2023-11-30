import styles from "./CartContent.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconGoBack, IconRecycle, IconTrash } from "../../../assets/Icons";

/**
 * I need to get all the details from the database again
 * Then i need to do some calulation to get the total.
 * I need to get all the paymethods. save them as svg
 * I should be able to remove item
 *
 */

export const CartContent = () => {
  const navigate = useNavigate();
  const imageUrl = "https://cdn.webhallen.com/images/product/326678?trim";

  const handleRemoveItem = () => {
    console.log("Remove current item from cart");
  };

  return (
    <>
      <div className="GoBackBtn" onClick={() => navigate(-1)}>
        <IconGoBack />
      </div>
      <div className={styles.CartContainer}>
        <div className={styles.Cart__LeftColumn}>
          <h2 className={styles.CartTitle}>
            Cart
            <span className={styles.CartCount}>1 produkt</span>
          </h2>
          <div className={styles.SingleCartItem}>
            <Link to={"/"}>
              <div
                className={styles.ProdCardImg}
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            </Link>
            <div className={styles.SingleCartItemInfo}>
              <div className={styles.DetailsContainer}>
                <div className={styles.ItemBrand}>iPhone 14 Pro</div>
                <div className={styles.AdditionalInfo}>Model: iPhone</div>
                <div className={styles.AdditionalInfo}>State: Okej</div>
              </div>

              <div className={styles.PriceContainer}>
                <div className={styles.ItemPrice}>3999kr</div>
                <button className="IconTrash" onClick={handleRemoveItem}>
                  {<IconTrash />}remove
                </button>
              </div>
            </div>
          </div>
          <div className={styles.CartItemOffer}>
            <div>
              <span className="IconRecycle">{<IconRecycle />}</span>
            </div>
            <p>Send us an old phone and get 300 kr off this order</p>
            <div>CHECKBOX</div>
          </div>
        </div>
        <div className={styles.Cart__RightColumn}>RightContent</div>
      </div>
    </>
  );
};
