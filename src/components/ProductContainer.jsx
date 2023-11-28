import styles from "./ProductContainer.module.scss";

export const ProductContainer = ({ noPadding }) => {
  const styling = {
    color: "red",
    textAlign: "center",
  };

  const className = generateClassName(styles, {
    ProductContainer: true,
    noPadding: noPadding,
  });
  return (
    <div className={className}>
      ProductContainer
      <section className={styles.Product}></section>
    </div>
  );
};

{
  /* <ProductContainer noPadding/> */
}
