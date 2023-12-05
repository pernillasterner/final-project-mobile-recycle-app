import { Link } from "react-router-dom";
import styles from "./PromptPage.module.scss";
import buttons from "../../components/commons/Buttons.module.scss";

export const PromptPage = ({ message }) => {
  if (message === "thank-you") {
    return (
      <section className={styles.PromptPageContainer}>
        <div>
          <img
            src="./thank-you-page-background.png"
            alt="phone getting new life"
          />
          <h1>Thank you for using Techcycle!</h1>
          <h2>Saving the planet, one phone at a time.</h2>
          <button className={buttons.PrimaryBtn}>
            <Link to="/">Back to shop</Link>
          </button>
        </div>
      </section>
    );
  } else if (message === "404") {
    return (
      <section className={styles.PromptPageContainer}>
        <div>
          <h1>Oops..no page found here</h1>
          <button className={buttons.PrimaryBtn}>
            <Link to="/">Go to shop</Link>
          </button>
        </div>
      </section>
    );
  }
};
