import styles from "./Footer.module.scss";
import buttonStyles from "../commons/Buttons.module.scss";
import { Link } from "react-router-dom";
import { IconFacebook } from "../../assets/Icons";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={`${styles.FooterSection} ${styles.InfoSection}`}>
        <h3>TechCycle</h3>
        <p>On a mission to consume less and re-use more.</p>
        <button className={buttonStyles.PrimaryBtn}>
          <Link to="/">Browse phones</Link>
        </button>
      </div>
      <div className={`${styles.FooterSection} ${styles.LinksSection}`}>
        <Link to="/">Refurbished phones</Link>
        <Link to="/">Community market</Link>
        <Link to="/">About</Link>
      </div>
      <div className={`${styles.FooterSection} ${styles.SocialSection}`}>
        <Link to="facebook" className={styles.IconCartLink}>
          <IconFacebook />
        </Link>
        <Link to="instagram" className={styles.IconCartLink}>
          <IconFacebook />
        </Link>
        <Link to="linkedin" className={styles.IconCartLink}>
          <IconFacebook />
        </Link>
      </div>
    </footer>
  );
};
