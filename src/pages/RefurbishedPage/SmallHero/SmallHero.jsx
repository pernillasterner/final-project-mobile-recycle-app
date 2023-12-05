import styles from "./SmallHero.module.scss";

export const SmallHero = ({ title }) => {
  return (
    <div className={styles.SmallHeroContainer}>
      <h1>{title}</h1>
    </div>
  );
};
