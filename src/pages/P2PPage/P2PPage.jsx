import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SmallHero } from "./SmallHero/SmallHero";
import { ProductList } from "../../components/ProductList/ProductList";
import { setInitialState } from "../../reducers/productSlice";

export const P2PPage = () => {
  return (
    <div id="peertopeer">
      <SmallHero title={"Peer2Peer"} />
      <ProductList category={"peer2peer"} />
    </div>
  );
};
