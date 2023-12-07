import { ProductList } from "../../components/ProductList/ProductList";
import { HomeHero } from "../Home/HomeHero/HomeHero";
import { useSelector } from "react-redux";
import { Community } from "./Community/Community";

export const Home = () => {
  const isModalActive = useSelector((state) => state.modal.isActive);

  return (
    <>
      {!isModalActive && (
        <>
          <HomeHero />
          <ProductList category={"refurbished"} />
          <Community />
        </>
      )}
    </>
  );
};
