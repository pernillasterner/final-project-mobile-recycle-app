import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { NavBar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItems, updateTotalItems } from "../src/reducers/cartSlice";
import { useEffect } from "react";

export const App = () => {
  const isModalActive = useSelector((state) => state.modal.isActive);
  const dispatch = useDispatch();

  // Need to initialize store with data from local storage
  useEffect(() => {
    // Get items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update store with the current data from local storage when mounting the page
    dispatch(updateCartItems(storedCart));
    dispatch(updateTotalItems(storedCart.length));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      {!isModalActive && (
        <>
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};
