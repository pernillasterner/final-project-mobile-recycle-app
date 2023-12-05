import styles from "./CartLeftColumn.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../../reducers/cartSlice";
import { IconRecycle, IconTrash } from "../../../../assets/Icons";

export const CartLeftColumn = ({ cartItems }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.totalItems);

  const handleRemoveItem = (itemId) => {
    if (itemId) {
      dispatch(removeFromCart(itemId));
    }
  };

  return (
    <section className={styles.Cart__LeftColumn}>
      <h2 className={styles.CartTitle}>
        Cart
        <span className={styles.CartCount}>
          {totalItems}
          {totalItems > 1 ? " products" : " product"}
        </span>
      </h2>
      <div className={styles.SingleCartItem}>
        {cartItems &&
          cartItems.map((item) => (
            <>
              <Link to={"/"}>
                <div
                  key={item.id}
                  className={styles.ProdCardImg}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                ></div>
              </Link>
              <div className={styles.SingleCartItemInfo}>
                <div className={styles.DetailsContainer}>
                  <div className={styles.ItemBrand}>{item.modelValue}</div>
                  <div className={styles.AdditionalInfo}>
                    Brand: {item.brandValue}
                  </div>
                  <div className={styles.AdditionalInfo}>Status: Okej</div>
                  <label className={styles.AdditionalInfo}>
                    Total items: {item.quantity}
                  </label>
                </div>

                <div className={styles.PriceContainer}>
                  <div className={styles.ItemPrice}>{item.priceValue} kr</div>
                  <button
                    className="IconTrash"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    {<IconTrash />} Remove
                  </button>
                </div>
              </div>
            </>
          ))}
      </div>
      <div className={styles.CartItemOffer}>
        <div>
          <span className={styles.IconRecycle}>{<IconRecycle />}</span>
        </div>
        <p>Send us an old phone and get 300 kr off this order</p>
        <div className={styles.OfferBanner}>
          <input type="checkbox" id="points" name="points" checked />
          <label htmlFor="points">Yes!</label>
        </div>
      </div>
    </section>
  );
};
