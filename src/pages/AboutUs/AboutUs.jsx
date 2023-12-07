import { IconGitHub, IconLinkedin } from "../../assets/Icons";
import styles from "./AboutUs.module.scss";

export const AboutUs = () => {
  return (
    <article className={styles.AboutUs}>
      <h1>Developers</h1>
      <div className={styles.AboutUsContainer}>
        <div className={styles.AboutUsCard}>
          <img src="./home-hero-img.jpg" alt="my face" />
          <h2>Pernilla Sterner</h2>
          <h3>Biography</h3>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
          <IconGitHub color={"black"} />
          <IconLinkedin color={"black"} />
        </div>
        <div className={styles.AboutUsCard}>
          <img src="./home-hero-img.jpg" alt="my face" />
          <h2>Sebastian Tigerschiöld</h2>
          <h3>Biography</h3>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
          <IconGitHub color={"black"} />
          <IconLinkedin color={"black"} />
        </div>
      </div>
    </article>
  );
};
