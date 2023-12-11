import styles from "./CartContent.module.scss";
import buttonStyles from "../../../components/commons/Buttons.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IconGoBack } from "../../../assets/Icons";
import { CartLeftColumn } from "./CartColumns/CartLeftColumn";
import { CartRightColumn } from "./CartColumns/CartRightColumn";
import { updateTotalItems } from "../../../reducers/cartSlice";
import { useEffect, useMemo } from "react";

export const CartContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalItems = useSelector((store) => store.cart.totalItems);

  // Get items from local storage.
  const cartItems = useMemo(
    () => JSON.parse(localStorage.getItem("cart")) || [],
    []
  );

  useEffect(() => {
    // Update totalItems in store whenever cartItems changes
    const newTotalItems = cartItems.length;
    dispatch(updateTotalItems(newTotalItems));
    // Save totalItems to local storage
    localStorage.setItem("totalItems", newTotalItems.toString());
  }, [cartItems, dispatch]);

  return (
    <div className={styles.CartContainer}>
      <div className={buttonStyles.GoBackBtn} onClick={() => navigate(-1)}>
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
