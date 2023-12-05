import styles from "./CartContent.module.scss";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import { IconGoBack } from "../../../assets/Icons";
import { CartLeftColumn } from "./CartColumns/CartLeftColumn";
import { CartRightColumn } from "./CartColumns/CartRightColumn";

export const CartContent = () => {
  // const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <>
      {/* <div className="GoBackBtn" onClick={() => navigate(-1)}>
        <IconGoBack />
      </div> */}
      <div className={styles.CartContainer}>
        {cartItems && (
          <div className={styles.CartColumns}>
            <CartLeftColumn cartItems={cartItems} />
            <CartRightColumn cartItems={cartItems} />
          </div>
        )}
      </div>
    </>
  );
};
