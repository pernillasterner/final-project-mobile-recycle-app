import { ProductList } from "../../components/ProductList/ProductList";
import { SmallHero } from "./SmallHero/SmallHero";

export const RefurbishedPage = () => {
  return (
    <>
      <SmallHero title={"Refurbished"} />
      <ProductList category={"refurbished"} />
    </>
  );
};
