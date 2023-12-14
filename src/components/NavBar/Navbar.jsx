import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./NavBar.module.scss";
import { SellModal } from "../SellModal/SellModal";
import { Dropdown } from "./Navigation/Dropdown/Dropdown";
import { MiniCart } from "./MiniCart/MiniCart";
import { Navigation } from "./Navigation/Navigation";
import { SellPhoneButton } from "./SellPhoneButton/SellPhoneButton";

export const NavBar = () => {
  const isModalActive = useSelector((state) => state.modal.isActive);

  const navLinksData = {
    refurbished: "Refurbished",
    peertopeer: "Peer2Peer",
    "about-us": "About Us",
  };

  return (
    <>
      {!isModalActive ? (
        <nav className={styles.NavBar}>
          <div className={styles.NavBarBrand}>
            {/* Logo */}
            <Link to="/">
              Tech<span>Cycle</span>
            </Link>
          </div>
          <div className={styles.NavBarRight}>
            {/* Navigation Links */}
            <Navigation navLinksData={navLinksData} />

            {/* Sell Phone Button */}
            <SellPhoneButton />

            {/* Mini Cart */}
            <MiniCart />

            {/* Dropdown Menu */}
            <Dropdown navLinksData={navLinksData} />
          </div>
        </nav>
      ) : (
        <>
          {/* Sell Modal */}
          <SellModal />
        </>
      )}
    </>
  );
};
