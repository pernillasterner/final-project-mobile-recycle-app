import styles from "./Navigation.module.scss";

import { NavLink } from "react-router-dom";

export const Navigation = ({ navLinksData }) => {
  return (
    <ul className={styles.NavBarMenu}>
      {Object.keys(navLinksData).map((link) => (
        <li key={link}>
          <NavLink to={`/${link}`}>{navLinksData[link]}</NavLink>
        </li>
      ))}
    </ul>
  );
};
