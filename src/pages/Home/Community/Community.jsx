import styles from "./Community.module.scss";
import buttons from "../../../components/commons/Buttons.module.scss";

export const Community = () => {
  return (
    <section className={styles.CommunitySection}>
      <div className={styles.CommunityDeal}>
        <div className={styles.CommunityDealText}>
          <h2>Best deal!</h2>
          <p>
            Change your phone and save the planet’s resources with our peer2peer
            smartphone market.
          </p>
          <button className={buttons.PrimaryBtn}>Browse phones</button>
        </div>
        <div className={styles.CommunityDealImg}>
          <img src="./home-deal-img.png" alt="" />
        </div>
      </div>
      <div className={styles.CommunityRecycle}>
        <div className={styles.CommunityDealText}>
          <h2>Let's ReCycle!</h2>
          <p>
            Change your phone and save the planet’s resources with our peer2peer
            smartphone market.
          </p>
          <button className={buttons.PrimaryBtn}>peer2peer</button>
        </div>
        <div className={styles.CommunityLatest}>
          <div className={styles.CommunityLatestCard}>
            <img src="./home-latest.jpg" alt="" />
            <p>Pixel 6a 128GB unopened</p>
            <span>Today 12:29</span>
            <p>2 500 kr</p>
            <img src="./green-circle.png" alt="" />
          </div>
          <div className={styles.CommunityLatestCard}>
            <img src="./home-latest.jpg" alt="" />
            <p>Pixel 6a 128GB unopened</p>
            <span>Today 12:29</span>
            <p>2 500 kr</p>
            <img src="./green-circle.png" alt="" />
          </div>
          <div className={styles.CommunityLatestCard}>
            <img src="./home-latest.jpg" alt="" />
            <p>Pixel 6a 128GB unopened</p>
            <span>Today 12:29</span>
            <p>2 500 kr</p>
            <img src="./green-circle.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
