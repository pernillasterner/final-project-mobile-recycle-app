import { BenefitsBanner } from "../../../components/BenefitsBanner/BenefitsBanner";
import styles from "./HomeHero.module.scss";
import buttonStyles from "../../../components/commons/Buttons.module.scss";
export const HomeHero = () => {
  return (
    <>
      <header className={styles.HomeHero}>
        <div className={styles.Text}>
          <h1>Buy and sell used phones</h1>
          <p>
            Change your phone and save the planet’s resources with our peer2peer
            smartphone market.{" "}
          </p>
          <button className={buttonStyles.PrimaryBtn}>BROWSE PHONE</button>
        </div>
        <div className={styles.Image}></div>
      </header>
      <BenefitsBanner />
    </>
  );
};
