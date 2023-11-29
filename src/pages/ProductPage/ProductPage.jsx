import styles from "./ProductPage.module.scss";

/**
 * Use params to fetch the prodId
 * Fetch that product using supabase select
 * Update the product page with the new product
 */

export const ProductPage = () => {
  return (
    // TODO: Add class and set color depengin on that
    <article className={styles.ProdContainer}>
      <div className="GoBackBtn"></div>
      <div className={styles.Prod__LeftColumn}>
        <div
          className={styles.ProdCardImg}
          style={{
            backgroundImage: `url("https://cdn.webhallen.com/images/product/326678?trim")`,
          }}
        ></div>
      </div>
      <div className={styles.Prod__RightColumn}>
        <h1 className={styles.ProdModel}>iPhone 14 Pro</h1>
        <div className="BrandInfo">
          <h5>Apple</h5>
          <p>2023-10-07</p>
        </div>
        <div className="ProdDetails">
          <p>Release year: 2023</p>
        </div>
        <div className="ProdDescription">
          <p>Description: bla bla bla</p>
        </div>
        <button className="AddToCartBtn">Add to cart</button>
      </div>
    </article>
  );
};
