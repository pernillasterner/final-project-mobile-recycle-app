import styles from "./Footer.module.scss";
import buttonStyles from "../commons/Buttons.module.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IconFacebook, IconInstagram, IconLinkedin } from "../../assets/Icons";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={`${styles.FooterSection} ${styles.InfoSection}`}>
        <h3>
          Tech<span>Cycle</span>
        </h3>
        <p>On a mission to consume less and re-use more.</p>
        <HashLink to={"/#allProducts"}>
          <button className={buttonStyles.ReversePrimaryBtn}>
<<<<<<< HEAD
            Browse phones
=======
            BROWSE PHONES
>>>>>>> e6d938b0d3166c701f4b7b5b5dac5292694087c8
          </button>
        </HashLink>
      </div>
      <div className={`${styles.FooterSection} ${styles.LinksSection}`}>
        <HashLink to="/refurbished/#refurbished">Refurbished</HashLink>
        <HashLink to="/peertopeer/#peertopeer">Peer2Peer</HashLink>
        <HashLink to="/about-us">About</HashLink>
      </div>
      <div className={`${styles.FooterSection} ${styles.SocialSection}`}>
        <Link to="facebook" className={styles.IconCartLink}>
          <IconFacebook />
        </Link>
        <Link to="instagram" className={styles.IconCartLink}>
          <IconInstagram />
        </Link>
        <Link to="linkedin" className={styles.IconCartLink}>
          <IconLinkedin />
        </Link>
      </div>
    </footer>
  );
};
