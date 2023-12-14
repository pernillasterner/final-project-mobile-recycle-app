import { SmallHero } from "./SmallHero/SmallHero";
import { ProductList } from "../../components/ProductList/ProductList";

export const P2PPage = () => {
  return (
    <div id="peertopeer">
      <SmallHero title={"Peer2Peer"} />
      <ProductList category={"peertopeer"} />
    </div>
  );
};
