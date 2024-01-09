import styles from "./CartContent.module.scss";
import buttonStyles from "../../../components/commons/Buttons.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconGoBack } from "../../../assets/Icons";
import { CartLeftColumn } from "./CartColumns/CartLeftColumn";
import { CartRightColumn } from "./CartColumns/CartRightColumn";
import { useEffect } from "react";

export const CartContent = () => {
  const navigate = useNavigate();
  const totalItems = useSelector((store) => store.cart.totalItems);
  const cartItems = useSelector((store) => store.cart.cartItems);

  // Update totalItems in local storage whenever cartItems in store changes
  useEffect(() => {
    // Save cartItems to local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Save totalItems to local storage
    localStorage.setItem("totalItems", totalItems.toString());
  }, [totalItems, cartItems]);

  return (
    <div className={styles.CartContainer}>
      <div className={styles.GoBackBtn} onClick={() => navigate(-1)}>
        <IconGoBack />
      </div>
      {totalItems === 0 ? (
        <CartLeftColumn cartItems={cartItems} />
      ) : (
        <>
          <CartLeftColumn cartItems={cartItems} />
          {totalItems !== 0 && <CartRightColumn cartItems={cartItems} />}
        </>
      )}
    </div>
  );
};
