import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { NavBar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

export const App = () => {
  const isModalActive = useSelector((state) => state.modal.isActive);

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
