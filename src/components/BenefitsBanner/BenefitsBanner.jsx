import { IconRecycle } from "../../assets/Icons";
import { IconSavings } from "../../assets/Icons";
import { IconPlanet } from "../../assets/Icons";
import styles from "./BenefitsBanner.module.scss";

export const BenefitsBanner = () => {
  return (
    <div className={styles.BenefitsBanner}>
      <div className={styles.Box}>
        <span className={styles.BenefitText}>
          {<IconRecycle />}Turn in phone and get a discount
        </span>
      </div>
      <div className={styles.Box}>
        <span className={styles.BenefitText}>
          {<IconSavings />}Save money by buying a used phone
        </span>
      </div>
      <div className={styles.Box}>
        <span className={styles.BenefitText}>
          {<IconPlanet />} Save our planet’s resources
        </span>
      </div>
    </div>
  );
};
