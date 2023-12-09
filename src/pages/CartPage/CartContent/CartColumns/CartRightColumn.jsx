import styles from "./CartRightColumn.module.scss";
import { useState, useEffect } from "react";
import {
  IconMaestro,
  IconMaster,
  IconVisaMethod,
} from "../../../../assets/Icons";

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
            <div key={item.id}>
              <ul className={styles.SummerListItem}>
                <li className={styles.ListItem__Brand}>{item.modelValue}</li>
                <li className={styles.ListItem__Price}>{item.priceValue} kr</li>
              </ul>
            </div>
          ))}
          <div className={styles.SummeryRow}>
            <span className={styles.ShippingText}>Shipping</span>
            <span className={styles.ShippingPrice}>
              {totalSum ? -59 : 0} kr
            </span>
          </div>
          <div className={styles.SummeryRow}>
            <span className={styles.RecycleText}>Recycle</span>
            <span className={styles.RecyclePrice}>
              {totalSum ? -130 : 0} kr
            </span>
          </div>
          <div className={styles.SummeryRowTotal}>
            <div className={styles.SummeryRow}>
              <span className={styles.TotalText}>Total:</span>
              <span className={styles.TotalPrice}>
                {totalSum ? totalSum + 59 - 130 : 0} kr
              </span>
            </div>
          </div>
        </div>
        <button
          className={`${styles.PrimaryBtn} ${totalSum ? "" : "not-active"}`}
        >
          Go to checkout
        </button>
        <div className={styles.PaymentLogosContainer}>
          <IconVisaMethod />
          <IconMaestro />
          <IconMaster />
        </div>
      </div>
    </section>
  );
};
