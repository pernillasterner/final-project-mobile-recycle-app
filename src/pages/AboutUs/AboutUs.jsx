import { IconGitHub, IconLinkedin } from "../../assets/Icons";
import { IconGitHub, IconLinkedin } from "../../assets/Icons";
import styles from "./AboutUs.module.scss";

export const AboutUs = () => {
  return (
    <article className={styles.AboutUs}>
      <h1>Developers</h1>
      <div className={styles.AboutUsContainer}>
        <div className={styles.AboutUsCard}>
          <img src="./pernilla.jpg" alt="pernilla sterner" />
          <h2>Pernilla Sterner</h2>
          <h3>Biography</h3>
          <p>
            My first steps as a developer began at Medieinstitutet, where I
            studied web development with a focus on e-commerce. There, I gained
            a solid foundation and was able to incorporate many different
            aspects of development that have been valuable during my time
            working for a startup company. Now, with diverse experience, I feel
            that the time is right to focus on my initial interest in React and
            frontend development. I look forward to continuing to learn and
            constantly evolve in this exciting tech world. Thanks for stopping
            by, and I hope you enjoyed the page.
          </p>
          <a href="https://github.com/pernillasterner">
            <IconGitHub color={"black"} />
          </a>
          <a href="https://www.linkedin.com/in/pernilla-sterner/">
            <IconLinkedin color={"black"} />
          </a>
        </div>
        <div className={styles.AboutUsCard}>
          <img src="./sebbe.jpg" alt="sebastian tigerschiöld" />
          <h2>Sebastian Tigerschiöld</h2>
          <h3>Biography</h3>
          <p>
            I'm mostly self-taught in the world of programming and taking a
            course in React has helped me take steps to the next level of
            developing for the web. I've been running my own company for the
            last few years where I help business owners create an effective
            website, mostly using WordPress.
          </p>
          <p>
            Completing this course in React is a stepping stone to building more
            complex and awesome web apps and sites in the future. I hope you
            enjoyed your stay on the site!
          </p>
          <a href="https://github.com/Seti108">
            <IconGitHub color={"black"} />
          </a>
          <a href="https://www.linkedin.com/in/sebastian-tigerschiold/">
            <IconLinkedin color={"black"} />
          </a>
        </div>
      </div>
    </article>
  );
};
