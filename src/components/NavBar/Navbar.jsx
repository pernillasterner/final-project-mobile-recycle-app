import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./NavBar.module.scss";
import buttonStyles from "../commons/Buttons.module.scss";
import { IconCart } from "../../assets/Icons";
import { SellModal } from "../SellModal/SellModal";
import { modalActive } from "../../reducers/modalSlice";

export const NavBar = () => {
  const dispatch = useDispatch();
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const isModalActive = useSelector((state) => state.modal.isActive);

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
      {!isModalActive ? (
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
              className={buttonStyles.SellYourPhoneBtn}
              onClick={() => dispatch(modalActive())}
            >
              Sell your phone
            </button>

            {totalItems !== 0 && (
              <div className={styles.MiniCartContainer}>
                <Link to="cart" className={styles.IconCartLink}>
                  <IconCart />
                </Link>
                <span className={styles.MiniCartCount}></span>
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
            {isDropdownActive && (
              <ul
                className={`${styles.HamburgerMenu} ${
                  isDropdownActive ? styles.isActive : "is-active"
                }`}
              >
                <li>
                  <NavLink to="/refurbished" onClick={handleNavLinkClick}>
                    Refurbished
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/peertopeer" onClick={handleNavLinkClick}>
                    Peer2Peer
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" onClick={handleNavLinkClick}>
                    About Us
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </nav>
      ) : (
        <>
          <SellModal />
        </>
      )}
    </>
  );
};
