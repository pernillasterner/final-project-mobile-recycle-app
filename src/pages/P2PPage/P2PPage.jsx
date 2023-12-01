import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SmallHero } from "./SmallHero/SmallHero";
import { ProductList } from "../../components/ProductList/ProductList";
import { setInitialState } from "../../reducers/productSlice";
import { SellModal } from "../../components/SellModal/SellModal";

export const P2PPage = () => {
  const [fetchError, setFetchError] = useState(null);
  // const [prods, setProds] = useState(null);
  const prods = useSelector((state) => state.product.products);
  const [filterProds, setFilterProds] = useState(null);
  const dispatch = useDispatch();
  // Fetch the data
  useEffect(() => {
    const fetchProds = async () => {
      try {
        const { data } = await supabase
          .from("phones")
          .select()
          .is("peer2peer", true);
        // setProds(data);
        dispatch(setInitialState(data));
        setFilterProds(data);
        setFetchError(null);
      } catch (error) {
        setFetchError("Could not fetch products");
        // setProds(null);
        console.log(error);
      }
    };

    fetchProds();
  }, []);

  return (
    <>
      <SellModal />
      <SmallHero />
      <ProductList />
    </>
  );
};
