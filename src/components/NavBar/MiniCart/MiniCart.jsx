import styles from "./MiniCart.module.scss";
import { Link } from "react-router-dom";
import { IconCart } from "../../../assets/Icons";

export const MiniCart = ({ totalItems }) => {
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
