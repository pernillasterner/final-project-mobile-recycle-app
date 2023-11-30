import styles from "./CartRightColumn.module.scss";
import { Link } from "react-router-dom";

export const CartRightColumn = () => {
  return (
    <section className={styles.Cart__RightColumn}>
      <div className={styles.CartSummeryContainer}>
        <div className={styles.CartSummery}>
          <ul className={styles.SummerListItem}>
            <li className={styles.ListItem__Brand}>iPhone 14 Pro</li>
            <li className={styles.ListItem__Price}>3999kr</li>
          </ul>
          <div className={styles.SummeryRow}>
            <span className={styles.ShippingText}>Shipping</span>
            <span className={styles.ShippingPrice}>59 kr</span>
          </div>
          <div className={styles.SummeryRowTotal}>
            <div className={styles.SummeryRow}>
              <span className={styles.TotalText}>Total</span>
              <span className={styles.TotalPrice}>1358 kr</span>
            </div>
          </div>
        </div>
        <button className="PrimaryBtn">
          <Link to="/checkout">Go to checkoute</Link>
        </button>
        <div className={styles.PaymentLogosContainer}>
          <div className={styles.PaymentLogos}>PAYMENT ICONS</div>
        </div>
      </div>
    </section>
  );
};
