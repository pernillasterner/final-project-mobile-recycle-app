import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.scss";
import { IconCart, IconHamburgerMenu } from "../../assets/Icons";

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

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

        <button className="PrimaryBtn">
          <Link to="/peer-to-peer">Sell Your Phone</Link>
        </button>
        <Link to="cart" className={styles.IconCartLink}>
          <IconCart />
        </Link>
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
