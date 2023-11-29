import { IconRecycle } from "../../assets/Icons";
import { IconSavings } from "../../assets/Icons";
import { IconPlanet } from "../../assets/Icons";
import styles from "./BenefitsBanner.module.scss";

export const BenefitsBanner = () => {
  return (
    <div className={styles.BenefitsBanner}>
      <div className={styles.Div}>
        <span className={styles.Span}>
          {<IconRecycle />}Turn in phone and get a discount
        </span>
      </div>
      <div className={styles.Div}>
        <span className={styles.Span}>
          {<IconSavings />}Save money by buying a used phone
        </span>
      </div>
      <div className={styles.Div}>
        <span className={styles.Span}>
          {<IconPlanet />} Save our planet’s resources
        </span>
      </div>
    </div>
  );
};
