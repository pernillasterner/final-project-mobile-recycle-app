import { NavLink } from "react-router-dom";
import styles from "./Dropdown.module.scss";
import { useState } from "react";

export const Dropdown = ({ navLinksData }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleNavLinkClick = () => {
    setIsDropdownActive(!isDropdownActive);
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
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

      {isDropdownActive && (
        <ul
          className={`${styles.HamburgerMenu} ${
            isDropdownActive ? styles.isActive : "is-active"
          }`}
        >
          {Object.keys(navLinksData).map((link) => (
            <li key={link}>
              <NavLink to={`/${link}`} onClick={handleNavLinkClick}>
                {navLinksData[link]}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
