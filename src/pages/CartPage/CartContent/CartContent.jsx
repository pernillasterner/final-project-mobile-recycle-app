import styles from "./CartContent.module.scss";
import { useNavigate } from "react-router-dom";
import { IconGoBack } from "../../../assets/Icons";
import { CartLeftColumn } from "./CartColumns/CartLeftColumn";
import { CartRightColumn } from "./CartColumns/CartRightColumn";

export const CartContent = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="GoBackBtn" onClick={() => navigate(-1)}>
        <IconGoBack />
      </div>
      <div className={styles.CartContainer}>
        <div className={styles.CartColumns}>
          <CartLeftColumn />
          <CartRightColumn />
        </div>
      </div>
    </>
  );
};
