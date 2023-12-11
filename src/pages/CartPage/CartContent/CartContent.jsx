import styles from "./CartContent.module.scss";
import buttonStyles from "../../../components/commons/Buttons.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IconGoBack } from "../../../assets/Icons";
import { CartLeftColumn } from "./CartColumns/CartLeftColumn";
import { CartRightColumn } from "./CartColumns/CartRightColumn";
import { updateCartItems, updateTotalItems } from "../../../reducers/cartSlice";
import { useEffect } from "react";

export const CartContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Add this line to get the dispatch function
  const totalItems = useSelector((store) => store.cart.totalItems);
  const cartItems = useSelector((store) => store.cart.cartItems);

  // Update totalItems in local storage whenever cartItems in store changes
  useEffect(() => {
    // Save cartItems to local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Save totalItems to local storage
    localStorage.setItem("totalItems", totalItems.toString());
  }, [totalItems, cartItems]);

  // Need to initialize store with data from local storage
  useEffect(() => {
    // Get items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = JSON.parse(localStorage.getItem("totalItems")) || 0;

    // Update store with the current data from local storage when mounting the page
    dispatch(updateCartItems(storedCart));
    dispatch(updateTotalItems(totalQuantity));
  }, [dispatch]);

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
