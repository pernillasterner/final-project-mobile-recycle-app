import styles from "./MiniCart.module.scss";
import { Link } from "react-router-dom";
import { IconCart } from "../../../assets/Icons";
import { useSelector } from "react-redux";

export const MiniCart = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <>
      {totalItems !== 0 && (
        <div className={styles.MiniCartContainer}>
          <Link to="cart" className={styles.IconCartLink}>
            <IconCart />
          </Link>
          <span className={styles.MiniCartCount}>{totalItems}</span>
        </div>
      )}
    </>
  );
};
