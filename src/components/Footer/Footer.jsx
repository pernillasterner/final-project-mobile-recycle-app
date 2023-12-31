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
        <HashLink to={"/#all-products"}>
          <button className={buttonStyles.ReversePrimaryBtn}>
            Browse phones
          </button>
        </HashLink>
      </div>
      <div className={`${styles.FooterSection} ${styles.LinksSection}`}>
        <HashLink to="/refurbished/#refurbished">Refurbished</HashLink>
        <HashLink to="/peertopeer/#peertopeer">Peer2Peer</HashLink>
        <HashLink to="/about-us">About</HashLink>
      </div>
      <div className={`${styles.FooterSection} ${styles.SocialSection}`}>
        <Link
          to="facebook"
          className={styles.IconCartLink}
          title="Visit our Facebook page"
        >
          <IconFacebook />
        </Link>
        <Link
          to="instagram"
          className={styles.IconCartLink}
          title="Visit our Instagram page"
        >
          <IconInstagram />
        </Link>
        <Link
          to="linkedin"
          className={styles.IconCartLink}
          title="Visit our Linkedin page"
        >
          <IconLinkedin />
        </Link>
      </div>
    </footer>
  );
};
