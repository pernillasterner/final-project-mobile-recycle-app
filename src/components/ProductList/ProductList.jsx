import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

export const ProductList = () => {
  const [fetchError, setFetchError] = useState(null);
  const [prods, setProds] = useState(null);

  // Fetch the data
  useEffect(() => {
    const fetchProds = async () => {
      try {
        const { data } = await supabase.from("products").select(); // Get all of the data
        setProds(data);
        console.log(data);
        setFetchError(null);
      } catch (error) {
        setFetchError("Could not fetch products");
        setProds(null);
        console.log(error);
      }
    };

    fetchProds();
  }, []);
  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {prods && (
        <div className="prods">
          {prods.map((prod) => (
            <div key={prod.id} className="prod-card">
              <h3>{prod.brandValue}</h3>
              <p>{prod.modelValue}</p>
              <p>{prod.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
