import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { NavBar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItems, updateTotalItems } from "../src/reducers/cartSlice";
import { useEffect } from "react";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

export const App = () => {
  const isModalActive = useSelector((state) => state.modal.isActive);
  const dispatch = useDispatch();

  // // Need to initialize store with data from local storage
  useEffect(() => {
    // Get items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = JSON.parse(localStorage.getItem("totalItems")) || 0;

    // Update store with the current data from local storage when mounting the page
    dispatch(updateCartItems(storedCart));
    dispatch(updateTotalItems(totalQuantity));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      {!isModalActive && (
        <>
          <main>
            <AppRoutes />
            <ScrollToTop />
          </main>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};
