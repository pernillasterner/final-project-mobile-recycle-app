import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from "./NavBar.module.scss";
import buttonStyles from "../commons/Buttons.module.scss";
import { IconCart, IconHamburgerMenu } from "../../assets/Icons";

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalItems);

  const handleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={styles.NavBar}>
      <div className={styles.NavBarBrand}>
        <Link to="/">TechCycle</Link>
      </div>
      <div className={styles.NavBarRight}>
        <ul className={styles.NavBarMenu}>
          <li>
            <NavLink to="/refurbished">Refurbished</NavLink>
          </li>
          <li>
            <NavLink to="/peer-to-peer">P2P</NavLink>
          </li>
        </ul>

        <button className={buttonStyles.PrimaryBtn}>
          <Link to="/peer-to-peer">Sell Your Phone</Link>
        </button>
        {totalItems !== 0 && (
          <div className={styles.MiniCartContainer}>
            <Link to="cart" className={styles.IconCartLink}>
              <IconCart />
            </Link>
            <span className={styles.MiniCartCount}>{totalItems}</span>
          </div>
        )}
        <div className={styles.HamburgerMenuIcon} onClick={handleDropdown}>
          <IconHamburgerMenu />
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
              <NavLink to="/peer-to-peer">P2P</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
