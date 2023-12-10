import styles from "./CartLeftColumn.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../../reducers/cartSlice";
import { IconRecycle, IconTrash } from "../../../../assets/Icons";
import buttonStyles from "../../../../components/commons/Buttons.module.scss";
import iconStyles from "../../../../components/commons/Icons.module.scss";

export const CartLeftColumn = ({ cartItems }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.totalItems);

  const handleRemoveItem = (itemId) => {
    if (itemId) {
      dispatch(removeFromCart(itemId));

      // Find the index of the item in the cart to remove
      const itemIndex = cartItems.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        // Remove the item
        cartItems.splice(itemIndex, 1);

        // Update the local storage
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
    }
  };

  const handleChecked = () => {
    // Give 300 points when purchase
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
        {cartItems && cartItems.length !== 0 ? (
          cartItems.map((item) => (
            <>
              <div className={styles.ItemContainer}>
                <Link to={"/"} className={styles.ImageLink}>
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
                      className={iconStyles.IconTrash}
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      {<IconTrash />} Remove
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <div className={styles.EmptyMessageContainer}>
            <p className={styles.EmptyCartMessage}>Your cart is empty.</p>
            <Link to={"/"}>
              <button className={buttonStyles.PrimaryBtn}>
                Go to products
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.CartItemOffer}>
        <div>
          <span className={iconStyles.IconRecycle}>{<IconRecycle />}</span>
        </div>
        <p>Send us an old phone and get 300 kr off this order</p>
        <div className={styles.OfferBanner}>
          <input
            type="checkbox"
            id="points"
            name="points"
            checked
            onChange={handleChecked}
          />
          <label htmlFor="points">Yes!</label>
        </div>
      </div>
    </section>
  );
};
