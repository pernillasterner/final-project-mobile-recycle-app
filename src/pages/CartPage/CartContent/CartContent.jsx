import styles from "./CartContent.module.scss";
import buttonStyles from "../../../components/commons/Buttons.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { IconGoBack } from "../../../assets/Icons";
import { CartLeftColumn } from "./CartColumns/CartLeftColumn";
import { CartRightColumn } from "./CartColumns/CartRightColumn";

export const CartContent = () => {
  const navigate = useNavigate();
  const totalItems = useSelector((store) => store.cart.totalItems);
  // Get items from local storage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <>
      <div className={buttonStyles.GoBackBtn} onClick={() => navigate(-1)}>
        <IconGoBack />
      </div>
      <div className={styles.CartContainer}>
        {totalItems === 0 ? (
          <CartLeftColumn cartItems={cartItems} />
        ) : (
          <>
            <CartLeftColumn cartItems={cartItems} />
            {totalItems !== 0 && <CartRightColumn />}
          </>
        )}
      </div>
    </>
  );
};
