import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from "./NavBar.module.scss";
import buttonStyles from "../commons/Buttons.module.scss";
import { IconCart } from "../../assets/Icons";
import { SellModal } from "../SellModal/SellModal";

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalItems);

  const handleDropdown = () => {
    setIsActive(!isActive);
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleIsSellModalOpen = () => {
    setIsSellModalOpen(!isSellModalOpen);
  };

  return (
    <nav className={styles.NavBar}>
      <div className={styles.NavBarBrand}>
        <Link to="/">
          Tech<span>Cycle</span>
        </Link>
      </div>
      <div className={styles.NavBarRight}>
        <ul className={styles.NavBarMenu}>
          <li>
            <NavLink to="/refurbished">Refurbished</NavLink>
          </li>
          <li>
            <NavLink to="/peertopeer">Peer2Peer</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>

        <button
          className={buttonStyles.SellYourPhoneBanner}
          onClick={handleIsSellModalOpen}
        >
          SELL YOUR PHONE
        </button>

        <button
          className={buttonStyles.SellYourPhoneBtn}
          onClick={handleIsSellModalOpen}
        >
          SELL YOUR PHONE
        </button>
        {isSellModalOpen && (
          <SellModal onClose={() => setIsSellModalOpen(false)} />
        )}

        {totalItems !== 0 && (
          <div className={styles.MiniCartContainer}>
            <Link to="cart" className={styles.IconCartLink}>
              <IconCart />
            </Link>
            <span className={styles.MiniCartCount}>{totalItems}</span>
          </div>
        )}
        <div
          className={`${styles.HamburgerMenuIcon} ${
            isBurgerOpen ? styles.open : ""
          }`}
          onClick={handleDropdown}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isActive && (
          <ul
            className={`${styles.HamburgerMenu} ${
              isActive ? styles.isActive : "is-active"
            }`}
          >
            <li>
              <NavLink to="/refurbished">Refurbished</NavLink>
            </li>
            <li>
              <NavLink to="/peertopeer">Peer2Peer</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
