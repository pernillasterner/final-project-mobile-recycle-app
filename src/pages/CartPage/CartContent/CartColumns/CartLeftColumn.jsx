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
          cartItems.map((item, index) => (
            <div key={index}>
              <Link to={"/"}>
                <div
                  className={styles.ProdCardImg}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                ></div>
              </Link>
              <div className={styles.SingleCartItemInfo}>
                <div className={styles.DetailsContainer}>
                  <p>Total Items {item.quantity}</p>
                  <div className={styles.ItemBrand}>{item.modelValue}</div>
                  <div className={styles.AdditionalInfo}>
                    Brand: {item.brandValue}
                  </div>
                  <div className={styles.AdditionalInfo}>State: Okej</div>
                </div>

                <div className={styles.PriceContainer}>
                  <div className={styles.ItemPrice}>{item.priceValue} kr</div>
                  <button
                    className="IconTrash"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    {<IconTrash />}remove
                  </button>
                </div>
              </div>
            </div>
          ))}
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
