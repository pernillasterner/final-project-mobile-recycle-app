import { ProductList } from "../../components/ProductList/ProductList";
import { HomeHero } from "../Home/HomeHero/HomeHero";
export const Home = () => {
  return (
    <>
      <HomeHero />
      <ProductList category={"refurbished"} />
    </>
  );
};
