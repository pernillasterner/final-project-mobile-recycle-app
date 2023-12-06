import { ProductList } from "../../components/ProductList/ProductList";
import { SmallHero } from "./SmallHero/SmallHero";

export const RefurbishedPage = () => {
  return (
    <div id="refurbished">
      <SmallHero title={"Refurbished"} />
      <ProductList category={"refurbished"} />
    </div>
  );
};
