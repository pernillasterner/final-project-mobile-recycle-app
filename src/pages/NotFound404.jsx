import styles from "./NotFound404.module.scss";
import buttons from "../components/commons/Buttons.module.scss";
import { Link } from "react-router-dom";

export const NotFound404 = () => {
  return (
    <section className={styles.NotFoundPageContainer}>
      <div>
        <h1>Oops..no page found here</h1>
        <button className={buttons.PrimaryBtn}>
          <Link to="/">Go to shop</Link>
        </button>
      </div>
    </section>
  );
};
