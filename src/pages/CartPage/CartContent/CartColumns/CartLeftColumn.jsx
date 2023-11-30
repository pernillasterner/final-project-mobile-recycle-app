import styles from "./CartLeftColumn.module.scss";
import { Link } from "react-router-dom";
import { IconRecycle, IconTrash } from "../../../../assets/Icons";

export const CartLeftColumn = () => {
  const imageUrl = "https://cdn.webhallen.com/images/product/326678?trim";

  const handleRemoveItem = () => {
    console.log("Remove current item from cart");
  };
  return (
    <section className={styles.Cart__LeftColumn}>
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
    </section>
  );
};
