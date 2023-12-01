import styles from "./CartRightColumn.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const CartRightColumn = ({ cartItems }) => {
  const [totalCartItems, setTotalCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const newTotalCartItems = [];
    let newTotalSum = 0;

    cartItems.map((item) => {
      if (item.quantity > 0) {
        for (let i = 0; i < item.quantity; i++) {
          newTotalCartItems.push(item);
          newTotalSum += item.priceValue;
        }
      }
    });
    setTotalCartItems(newTotalCartItems);
    setTotalSum(newTotalSum);
  }, [cartItems]);

  return (
    <section className={styles.Cart__RightColumn}>
      <div className={styles.CartSummeryContainer}>
        <div className={styles.CartSummery}>
          {totalCartItems.map((item) => (
            <>
              <ul className={styles.SummerListItem}>
                <li className={styles.ListItem__Brand}>{item.modelValue}</li>
                <li className={styles.ListItem__Price}>{item.priceValue} kr</li>
              </ul>
            </>
          ))}
          <div className={styles.SummeryRow}>
            <span className={styles.ShippingText}>Shipping</span>
            <span className={styles.ShippingPrice}>59 kr</span>
          </div>
          <div className={styles.SummeryRowTotal}>
            <div className={styles.SummeryRow}>
              <span className={styles.TotalText}>Total</span>
              <span className={styles.TotalPrice}>{totalSum + 59} kr</span>
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